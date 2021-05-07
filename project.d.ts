/* eslint-disable max-classes-per-file */

declare module "nuxt" {

  import { NuxtConfig, NuxtOptions } from "@nuxt/types";
  import HTTP from "http";


  export class Nuxt {

    public options: NuxtOptions;
    public renderer: unknown;

    public constructor(config: NuxtConfig);

    public ready(): Promise<void>;

    public render(request: HTTP.IncomingMessage, response: HTTP.ServerResponse): Promise<void>;
  }

  export class Builder {

    public constructor(nuxtApplication: Nuxt);

    public build(): Promise<void>;
  }
}


declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
