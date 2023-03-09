import { Injectable } from '@nestjs/common';
import { XMLParser } from 'fast-xml-parser';
import { EveryTimeResponse } from './every_time_response';

@Injectable()
export class EveryTimeConvertor {
  parser = new XMLParser({
    attributeNamePrefix: '',
    ignoreAttributes: false,
  });

  parseXML(xml: string): EveryTimeResponse | undefined {
    const obj = this.parser.parse(xml);
    const response = obj['response'] as EveryTimeResponse | -1;
    if (response === -1) {
      return undefined;
    }
    return response;
  }
}
