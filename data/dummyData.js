import City from '../model/city';

export const CITIES = [
  new City('1', 'Hamburg', 
  {summary: [12,15,13,17,13,13,14], 
    month: [[12,15,13,17,13,13,14],
    [13,16,12,12,11,11,12],
    [12,15,13,17,13,13,14],
    [12,15,13,17,13,13,14],
    [12,15,13,17,13,13,14],
    [12,15,13,17,13,13,14],
    [12,15,13,17,13,13,14],
    [12,15,13,17,13,13,14],
    [12,15,13,17,13,13,14],
    [12,15,13,17,13,13,14],
    [12,15,13,17,13,13,14],
    [12,15,13,17,13,13,14]]} , Last7Days()),
  new City('2', 'Berlin', 
  {summary: [13,14,16,17,14,16,15], 
    month: [[13,14,16,17,14,16,15],
    [12,13,12,15,12,11,12],
    [13,14,16,17,14,16,15],
    [13,14,16,17,14,16,15],
    [13,14,16,17,14,16,15],
    [13,14,16,17,14,16,15],
    [13,14,16,17,14,16,15],
    [13,14,16,17,14,16,15],
    [13,14,16,17,14,16,15],
    [13,14,16,17,14,16,15],
    [13,14,16,17,14,16,15],
    [13,14,16,17,14,16,15]]}, Last7Days()),
  new City('3', 'München', 
  {summary: [15,20,19,20,18,19,18], 
    month: [[15,20,19,20,18,19,18],
    [13,14,16,15,13,16,17],
    [15,20,19,20,18,19,18],
    [15,20,19,20,18,19,18],
    [15,20,19,20,18,19,18],
    [15,20,19,20,18,19,18],
    [15,20,19,20,18,19,18],
    [15,20,19,20,18,19,18],
    [15,20,19,20,18,19,18],
    [15,20,19,20,18,19,18],
    [15,20,19,20,18,19,18],
    [15,20,19,20,18,19,18]]}, Last7Days()),
  new City('4', 'Frankfurt', 
  {summary: [14,16,14,18,15,16,17], 
    month: [[14,16,14,18,15,16,17],
    [15,13,14,16,12,15,15],
    [14,16,14,18,15,16,17],
    [14,16,14,18,15,16,17],
    [14,16,14,18,15,16,17],
    [14,16,14,18,15,16,17],
    [14,16,14,18,15,16,17],
    [14,16,14,18,15,16,17],
    [14,16,14,18,15,16,17],
    [14,16,14,18,15,16,17],
    [14,16,14,18,15,16,17],
    [14,16,14,18,15,16,17]]}, Last7Days()),
  new City('5', 'Köln', 
  {summary: [16,14,15,19,18,19,16], 
    month: [[16,14,15,19,18,19,16],
    [15,12,13,17,16,18,12],
    [16,14,15,19,18,19,16],
    [16,14,15,19,18,19,16],
    [16,14,15,19,18,19,16],
    [16,14,15,19,18,19,16],
    [16,14,15,19,18,19,16],
    [16,14,15,19,18,19,16],
    [16,14,15,19,18,19,16],
    [16,14,15,19,18,19,16],
    [16,14,15,19,18,19,16],
    [16,14,15,19,18,19,16]]}, Last7Days())
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

