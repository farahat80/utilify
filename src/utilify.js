import Strings from './utilify.strings';
import Arrays from './utilify.arrays';
import Objects from './utilify.objects';
import Url from './utilify.url';
import Numbers from './utilify.numbers';

var utilify = {
  strings: new Strings(),
  arrays: new Arrays(),
  objects: new Objects(),
  url: new Url(),
  numbers: new Numbers(),
};

module.exports = utilify;
