<template>
  <div class="row margin-20">
    <h2>{{ $tc('signin.this') }}</h2>
    <div class="col-sm-12">
      <form>
        <div class="form-group">
          <label>{{ $tc('common.email') }}</label>
          <input
            type="email"
            autocomplete="email"
            class="form-control"
            v-model="user.email"
            v-on:input="this.validateEmail"
          />
          <span class="error-msg">{{ validation.email ? validation.email : '' }}</span>
        </div>
        <div class="form-group">
          <label>{{ $tc('common.name') }}</label>
          <input
            autocomplete="nickname"
            class="form-control"
            v-model="user.name"
            v-on:input="this.validateName"
          />
          <span class="error-msg">{{ validation.name ? validation.name : '' }}</span>
        </div>
        <div class="form-group">
          <label>{{ $tc('common.birth') }}</label>
          <input type="date" class="form-control" v-model="user.birth" />
        </div>
        <div class="form-group">
          <label>{{ $tc('division.this') }}</label>
          <div>
            <select v-model="user.division_id">
              <optgroup label="Choose">
                <option
                  v-for="division in divisions"
                  v-bind:key="division.id"
                  v-bind:value="division.id"
                >{{ division.name }}</option>
              </optgroup>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>{{ $tc('common.password') }}</label>
          <input
            type="password"
            autocomplete="new-password"
            class="form-control"
            v-model="user.password"
            v-on:input="this.validatePwd"
          />
          <span class="error-msg">{{ validation.password ? validation.password : '' }}</span>
        </div>
        <div class="form-group">
          <label for="confirmPassword">{{ $tc('common.confirm_password') }}</label>
          <input
            type="password"
            autocomplete="new-password"
            class="form-control"
            id="confirmPassword"
            v-model="user.confirm_password"
            v-on:input="this.validateConfirmPwd"
          />
          <span
            class="error-msg"
          >{{ validation.confirm_password ? validation.confirm_password : '' }}</span>
        </div>
        <button
          type="submit"
          class="btn-lg btn-primary"
          v-on:click="($event) => signIn($event)"
        >{{ $tc('common.form.confirm') }}</button>
        <button class="btn-lg btn-danger" v-on:click="() => cancel()">{{ $tc('common.cancel') }}</button>
      </form>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Component from "vue-class-component";
import gql from "graphql-tag";

import _ from "lodash";

import { Validators, ValidationResponse } from "../../../utils/Validators";

import { ApolloResponse } from "../../../types";
import { DivisionModel, UserModel } from "../../../models";

@Component({
  apollo: {
    divisions() {
      return {
        query: gql`
          query {
            divisions {
              id
              name
              description
            }
          }
        `,
        // pollInterval: 300, // Continuouse call function ms
        result(result: ApolloResponse) {
          if (!result.loading) {
            return result.data.divisions;
          }
        },
        fetchPolicy: "cache-and-network"
      };
    }
  }
})
export default class SigninView extends Vue {
  divisions: DivisionModel[] = [];
  user = {
    email: "shun@gmail.com",
    name: "Seolhun",
    birth: "1990-01-26",
    division_id: 1,
    password: "",
    confirm_password: ""
  } as UserModel;
  validation = {
    email: "",
    name: "",
    password: "",
    confirm_password: ""
  };
  is_active: boolean = false;

  signIn(event: Event) {
    event.preventDefault();
    this.validateUser();
    if (!this.is_active) {
      return;
    }
    const user = this.user;
    this.$apollo
      .mutate({
        mutation: gql`
        mutation  {
          addUser(name: "${user.name}", email: "${user.email}", password: "${user.password}", birth: "${user.birth}", division_id: ${user.division_id}) {
            id
            email
            name
          }
        }
      `
      })
      .then((result: ApolloResponse) => {
        const db_user: UserModel = result.data.addUser;
        if (db_user) {
          this.$router.push(`/users/${db_user.name}`);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  cancel() {
    this.$router.go(-1);
  }

  validateUser() {
    this.validateEmail();
    if (this.validation.email) {
      return;
    }
    this.validateName();
    if (this.validation.name) {
      return;
    }
    this.validatePwd();
    if (this.validation.password) {
      return;
    }
    this.validateConfirmPwd();
    if (this.validation.confirm_password) {
      return;
    }
    if (!this.user.division_id) {
      return;
    }
    if (!this.user.birth) {
      return;
    }
    this.is_active = true;
  }

  private validateEmail(): void {
    const email_validation = Validators.isEmail(this.user.email);
    if (!email_validation.result) {
      this.validation.email = email_validation.msg;
    } else {
      this.validation.email = "";
    }
  }

  private validateName(): void {
    const name_validation = Validators.isName(this.user.name);
    if (!name_validation.result) {
      this.validation.name = name_validation.msg;
    } else {
      this.validation.name = "";
    }
  }

  private validatePwd(): void {
    const pwd_validation = Validators.isPassword(this.user.password);
    if (!pwd_validation.result) {
      this.validation.password = pwd_validation.msg;
    } else {
      this.validation.password = "";
    }
  }

  private validateConfirmPwd(): void {
    const confirm_pwd_validation = Validators.isPassword(
      this.user.confirm_password
    );
    if (!confirm_pwd_validation.result) {
      this.validation.confirm_password = confirm_pwd_validation.msg;
    } else {
      this.validation.confirm_password = "";
    }
  }
}
</script>


<style lang='scss' scoped>
@import "SigninView";
</style>

