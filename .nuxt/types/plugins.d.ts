// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../components.plugin").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.3.2/node_modules/nuxt/dist/head/runtime/plugins/unhead").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.3.2/node_modules/nuxt/dist/head/runtime/plugins/vueuse-head-polyfill").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.3.2/node_modules/nuxt/dist/pages/runtime/plugins/router").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.3.2/node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+image-edge@1.0.0-27991759.1a5eea1/node_modules/@nuxt/image-edge/dist/runtime/plugin").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+content@2.5.2/node_modules/@nuxt/content/dist/runtime/plugins/ws").default> &
  InjectionType<typeof import("../unocss").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.3.2/node_modules/nuxt/dist/app/plugins/chunk-reload.client").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}
// TODO: remove when webstorm has support for augumenting 'vue' directly
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }