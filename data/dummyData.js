import City from '../model/city';

export const CITIES = [
  new City('1', 'Hamburg', [12,15,13,17,13,13,14], Last7Days()),
  new City('2', 'Berlin', [13,14,16,17,14,16,15], Last7Days()),
  new City('3', 'München', [15,20,19,20,18,19,18], Last7Days()),
  new City('4', 'Frankfurt', [14,16,14,18,15,16,17], Last7Days()),
  new City('5', 'Köln', [16,14,15,19,18,19,16], Last7Days())
];

function Last7Days () {
    return '0123456'.split('').map(function(n) {
        var d = new Date();
        d.setDate(d.getDate() - n);

        return (function(day, month) {
            return [day<10 ? '0'+day : day, month<10 ? '0'+month : month].join('.');
        })(d.getDate(), d.getMonth() + 1);
    }).join(',');
 }

