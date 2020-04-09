import Element from 'main/index.js';
import { post, get } from './ajax';

const { version } = Element;

const hostList = {
	local: 'http://192.168.3.47:44379/',
	alpha: 'https://192.168.3.47/element/theme/',
	production: 'https://element-api.ele.me/element/theme/'
};

const host = hostList[process.env.FAAS_ENV] || hostList.production;

export const getVars = () => {
	return get(`${host}getVariable?version=${version}`);
};

export const getTestEle = () => {
	return get(`${hostList.alpha}getVariable`);
};

export const updateVars = (data, cb) => {
	return post(`${host}updateVariable?version=${version}`, data, cb);
};
