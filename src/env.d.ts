/// <reference types="vite/client" />
 
declare module '*.vue' {
	import { DefineComponent } from 'vue';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>;
	export default component;
}
 
// 环境变量 TypeScript的智能提示
interface ImportMetaEnv {
	VITE_APP_TITLE: string;
	VITE_APP_PORT: string;
	VITE_APP_BASE_API: string;
}
 
interface ImportMeta {
	readonly env: ImportMetaEnv;
}

// declare module 'element-plus' {
// 	export class ElMessageBox {
//       static confirm(text: string, arg1: string, arg2: {
//           confirmButtonText: string; cancelButtonText: string;
//           // 环境变量 TypeScript的智能提示
//           type: string;
//       }) {
//           throw new Error('Method not implemented.');
//       }
// 	  static success(message: string): void;
// 	  static warning(message: string): void;
// 	  static info(message: string): void;
// 	  static error(message: string): void;
// 	}
//   }