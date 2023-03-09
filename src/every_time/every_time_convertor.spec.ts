import { Test, TestingModule } from '@nestjs/testing';
import { EveryTimeConvertor } from './every_time_convertor';

describe('EveryTimeConvertor', () => {
  let convertor: EveryTimeConvertor;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [EveryTimeConvertor],
    }).compile();

    convertor = app.get<EveryTimeConvertor>(EveryTimeConvertor);
  });

  describe('root', () => {
    it('should convert xml to JSON object', () => {
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<response>
    <table year="2023" semester="1" status="1" identifier="zFf2lThgSfPR8JiquFUD">
        <subject id="5990132">
            <internal value="CSE4020-22733"/>
            <name value="컴퓨터그래픽스"/>
            <professor value="박진성"/>
            <time value="목(19:00-20:30),목(20:30-22:00)">
                <data day="3" starttime="228" endtime="264" place="제4공학관PC3실"/>
            </time>
            <place value="제4공학관PC3실"/>
            <credit value="3"/>
            <closed value="0"/>
        </subject>
        <subject id="5990135">
            <internal value="IEN2010-22742"/>
            <name value="융합캡스톤기초"/>
            <professor value="이성준"/>
            <time value="토(19:00-21:00)">
                <data day="5" starttime="228" endtime="252" place="제1공학관301강의실"/>
            </time>
            <place value="제1공학관301강의실"/>
            <credit value="1"/>
            <closed value="0"/>
        </subject>
        <subject id="5990336">
            <internal value="ELE2003-22735"/>
            <name value="회로이론"/>
            <professor value="이성준"/>
            <time value="토(09:00-10:30),토(10:30-12:00)">
                <data day="5" starttime="108" endtime="144" place="제1공학관303강의실"/>
            </time>
            <place value="제1공학관303강의실"/>
            <credit value="3"/>
            <closed value="0"/>
        </subject>
        <subject id="5990575">
            <internal value="IEN2002-22740"/>
            <name value="정전기학"/>
            <professor value="양성일"/>
            <time value="수(19:00-20:30),수(20:30-22:00)">
                <data day="2" starttime="228" endtime="264" place="제1공학관303강의실"/>
            </time>
            <place value="제1공학관303강의실"/>
            <credit value="3"/>
            <closed value="0"/>
        </subject>
        <subject id="5990607">
            <internal value="MAT2030-22754"/>
            <name value="공학수학"/>
            <professor value="민웅규"/>
            <time value="월(19:00-20:30),월(20:30-22:00)">
                <data day="0" starttime="228" endtime="264" place="제1공학관304강의실"/>
            </time>
            <place value="제1공학관304강의실"/>
            <credit value="3"/>
            <closed value="0"/>
        </subject>
        <subject id="5990867">
            <internal value="IEN2007-22741"/>
            <name value="프로그래밍응용"/>
            <professor value="이상훈"/>
            <time value="토(15:00-16:30),토(16:30-18:00)">
                <data day="5" starttime="180" endtime="216" place="제1공학관306호CAD실(기계)"/>
            </time>
            <place value="제1공학관306호CAD실(기계)"/>
            <credit value="3"/>
            <closed value="0"/>
        </subject>
    </table>
    <user name="전성우"/>
    <primaryTables>
        <primaryTable year="2023" semester="1" identifier="zFf2lThgSfPR8JiquFUD"/>
        <primaryTable year="2022" semester="2" identifier="O8MaSWvR6076ItKL73cB"/>
        <primaryTable year="2022" semester="1" identifier="w33tzAy7KqAt329uo2xY"/>
    </primaryTables>
</response>`;
      const obj = convertor.parseXML(xml);
      expect(obj).not.toBeNull();
      expect(obj).not.toBeUndefined();
      expect(obj.table).not.toBeNull();
      expect(obj.table).not.toBeUndefined();
    });

    it('should convert xml for error to undefined', () => {
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<response>-1</response>`;
      const obj = convertor.parseXML(xml);
      expect(obj).toBeUndefined();
    });
  });
});
