import 'dotenv/config';
// require('dotenv').config();


import { handleEnvInt } from "../libs/queues.js";
import generateRequestsCwService from '../services/queues/generateRequestsCwService.js';
import saveLawsuitResponseService from '../services/queues/saveLawsuitResponseService.js';
import searchTermQueryService from '../services/queues/searchTermQueryService.js';
import searchTermService from '../services/queues/searchTermService.js';
import updateCnjParamReqsService from '../services/queues/updateCnjParamReqsService.js';
import dictionary from './dictionary.js';

const {

  PREFETCH_SEND_TO_CALLBACK,

  PREFETCH_GET_RESPONSE_PUSH_RETRY,
  PREFETCH_DEFAULT,
  PREFETCH_SEARCH_TERM,
  PREFETCH_SEARCH_TERM_PEOPLE,
  PREFETCH_SEARCH_TERM_COVERS,
  PREFETCH_SEARCH_TERM_PROPERTIES,
  PREFETCH_UPDATE_CNJ_PARAM_REQS,
  PREFETCH_SAVE_LAWSUIT_RESPONSE

} = process.env;

const queues = [

  // {
  //   callback: sendCallbacksService,
  //   url: dictionary.queuesUrl.queue,
  //   name: dictionary.queues.sendToCallback,
  //   settings: { prefetch: handleEnvInt(PREFETCH_SEND_TO_CALLBACK, PREFETCH_DEFAULT || 0), maxPriority: 255 },
  // },

  // {
  //   callback: getResponsePushRetryService,
  //   url: dictionary.queuesUrl.queue,
  //   name: dictionary.queues.getResponsePushApiRetry,
  //   settings: { prefetch: handleEnvInt(PREFETCH_GET_RESPONSE_PUSH_RETRY, PREFETCH_DEFAULT || 0), maxPriority: 255 },
  // },
  {
    callback: searchTermService,
    url: dictionary.queuesUrl.queue,
    name: dictionary.queues.searchTerm,
    settings: { prefetch: handleEnvInt(PREFETCH_SEARCH_TERM, PREFETCH_DEFAULT || 0), maxPriority: 255 },
  },
  {
    callback: searchTermQueryService,
    url: dictionary.queuesUrl.queue,
    name: dictionary.queues.searchTermPeople,
    settings: { prefetch: handleEnvInt(PREFETCH_SEARCH_TERM_PEOPLE, PREFETCH_DEFAULT || 0), maxPriority: 255 },
  },
  {
    callback: searchTermQueryService,
    url: dictionary.queuesUrl.queue,
    name: dictionary.queues.searchTermCovers,
    settings: { prefetch: handleEnvInt(PREFETCH_SEARCH_TERM_COVERS, PREFETCH_DEFAULT || 0), maxPriority: 255 },
  },
  {
    callback: searchTermQueryService,
    url: dictionary.queuesUrl.queue,
    name: dictionary.queues.searchTermProperties,
    settings: { prefetch: handleEnvInt(PREFETCH_SEARCH_TERM_PROPERTIES, PREFETCH_DEFAULT || 0), maxPriority: 255 },
  },

  {
    callback: updateCnjParamReqsService,
    url: dictionary.queuesUrl.queue,
    name: dictionary.queues.updateCnjParamReqs,
    settings: { prefetch: handleEnvInt(PREFETCH_UPDATE_CNJ_PARAM_REQS, PREFETCH_DEFAULT || 0), maxPriority: 255 },
  },
  {
    callback: saveLawsuitResponseService,
    url: dictionary.queuesUrl.queue,
    name: dictionary.queues.updateCnjParamReqs,
    settings: { prefetch: handleEnvInt(PREFETCH_SAVE_LAWSUIT_RESPONSE, PREFETCH_DEFAULT || 0), maxPriority: 255 },
  },
  {
    callback: generateRequestsCwService,
    url: dictionary.queuesUrl.queue,
    name: dictionary.queues.generateRequestCw,
    settings: { prefetch: handleEnvInt(PREFETCH_SAVE_LAWSUIT_RESPONSE, PREFETCH_DEFAULT || 0), maxPriority: 255 },
  },


];

export default queues;