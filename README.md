# Vue 3 Template

This is proof of concept project, which tests some features of Vue3 and other modules, such as tailwind, pinia and so on.

Modules included:

- Tailwind
- Pinia
- VueRouter
- FormKit

## Usage

- Install packages

```
npm install
```

- Run dev server

```
npm run dev
```

## Editor

Recommended extensions for `vscode`:

- (Install): Volar
- (Install): Prettier
- (Uninstall): Vetur

## Docker

### Build image

```
docker build -t vue3pof:latest .
```

### Run container

```
docker run -p 8080:80 vue3pof:latest

```

## Interesting links

- [Entrypoint](https://github.com/francescarpi/vue_3_template/blob/8123a5c0382aee2dac3b7be3cd0bced79d64872a/src/main.ts#L11)
- [Router configuration](https://github.com/francescarpi/vue_3_template/blob/8123a5c0382aee2dac3b7be3cd0bced79d64872a/src/router.ts#L5)
- [Default store using Pinia](https://github.com/francescarpi/vue_3_template/blob/8123a5c0382aee2dac3b7be3cd0bced79d64872a/src/stores/default.ts#L8)
- [Using the store](https://github.com/francescarpi/vue_3_template/blob/8123a5c0382aee2dac3b7be3cd0bced79d64872a/src/views/HomePage.vue#L7)
- [Using environment variable](https://github.com/francescarpi/vue_3_template/blob/8123a5c0382aee2dac3b7be3cd0bced79d64872a/src/views/HomePage.vue#L9)
- [Using life cycle](https://github.com/francescarpi/vue_3_template/blob/8123a5c0382aee2dac3b7be3cd0bced79d64872a/src/views/HomePage.vue#L11)
- [Using FormKit](https://github.com/francescarpi/vue_3_template/blob/8123a5c0382aee2dac3b7be3cd0bced79d64872a/src/views/FormPage.vue#L22)
- [Defining component's props](https://github.com/francescarpi/vue_3_template/blob/8123a5c0382aee2dac3b7be3cd0bced79d64872a/src/components/atoms/BigTitle/BigTitle.vue#L6)
- [Simple test](https://github.com/francescarpi/vue_3_template/blob/8123a5c0382aee2dac3b7be3cd0bced79d64872a/src/components/atoms/BigTitle/BigTitle.spec.ts#L4)
- [Use of tailwind](https://github.com/francescarpi/vue_3_template/blob/8123a5c0382aee2dac3b7be3cd0bced79d64872a/src/views/HomePage.vue#L20)
