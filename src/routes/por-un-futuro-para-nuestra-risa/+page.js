import { redirect } from '@sveltejs/kit';

export function load() {
  redirect(301, '/ensayos/por-un-futuro-para-nuestra-risa');
}
