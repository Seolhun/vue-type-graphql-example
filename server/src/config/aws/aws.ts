import * as AWS from 'aws-sdk';
import logger from 'common/logger';
import fs from 'fs';

AWS.config.update({
  region: 'ap-northeast-2',
  logger,
});

const dynamodb = new AWS.DynamoDB();
const params = {
  TableName: 'Movies',
  KeySchema: [
    { AttributeName: 'year', KeyType: 'HASH' },  // Partition key
    { AttributeName: 'title', KeyType: 'RANGE' }, // Sort key
  ],
  AttributeDefinitions: [
    { AttributeName: 'year', AttributeType: 'N' },
    { AttributeName: 'title', AttributeType: 'S' },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10,
  },
};

dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.error('Unable to create table. Error JSON:', JSON.stringify(err, null, 2));
  } else {
    console.log('Created table. Table description JSON:', JSON.stringify(data, null, 2));
  }
});

const docClient = new AWS.DynamoDB.DocumentClient();
console.log('Importing movies into DynamoDB. Please wait.');
const allMovies = JSON.parse(fs.readFileSync('../../../sample/moviedata.json', 'utf8'));
allMovies.forEach((movie) => {
  const params = {
    TableName: 'Movie',
    Item: {
      year: movie.year,
      title: movie.title,
      info: movie.info,
    },
  };

  docClient.put(params, (err, data) => {
    if (err) {
      console.log('Unable to add movie : ', movie.title, '. Error');
    } else {
      console.log('PutItem succeeded : ', movie.title);
    }

  });
});
