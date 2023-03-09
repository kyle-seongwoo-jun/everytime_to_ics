import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class EveryTimeApi {
  async getTimetable(id: string): Promise<any> {
    const response = await axios.post(
      'https://api.everytime.kr/find/timetable/table/friend',
      {
        identifier: id,
        friendInfo: 'true',
      },
      {
        responseType: 'document',
        headers: {
          Accept: '*/*',
          Connection: 'keep-alive',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          Host: 'api.everytime.kr',
          Origin: 'https://everytime.kr',
          Referer: 'https://everytime.kr/',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36',
        },
      },
    );
    const xml = response.data;
    return xml;
  }
}
