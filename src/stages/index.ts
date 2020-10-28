import stage1 from './1.json';
import stage2 from './2.json';
import stage3 from './3.json';
import stage4 from './4.json';
import stage5 from './5.json';
import stage6 from './6.json';
import stage7 from './7.json';
import stage8 from './8.json';
import stage9 from './9.json';
import stage10 from './10.json';
import stage11 from './11.json';
import stage12 from './12.json';
import stage13 from './13.json';
import stage14 from './14.json';
import stage15 from './15.json';
import stage16 from './16.json';
import stage17 from './17.json';
import stage18 from './18.json';
import stage19 from './19.json';
import stage20 from './20.json';

const stages = {
  stage1,
  stage2,
  stage3,
  stage4,
  stage5,
  stage6,
  stage7,
  stage8,
  stage9,
  stage10,
  stage11,
  stage12,
  stage13,
  stage14,
  stage15,
  stage16,
  stage17,
  stage18,
  stage19,
  stage20,
};

export type StageType = keyof typeof stages;

export default stages;