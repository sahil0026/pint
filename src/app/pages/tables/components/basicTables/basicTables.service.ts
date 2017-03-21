import { Injectable } from '@angular/core';

@Injectable()
export class BasicTablesService {

  smartTablePageSize = 10;

  smartTableData = [
    {
      id: 1,
      firstName: 'Mark',
      lastName: 'Otto',
      username: '@mdo',
      email: 'mdo@gmail.com',
      age: '28'
    },
    {
      id: 2,
      firstName: 'Jacob',
      lastName: 'Thornton',
      username: '@fat',
      email: 'fat@yandex.ru',
      age: '45'
    },
    {
      id: 3,
      firstName: 'Larry',
      lastName: 'Bird',
      username: '@twitter',
      email: 'twitter@outlook.com',
      age: '18'
    },
    {
      id: 4,
      firstName: 'John',
      lastName: 'Snow',
      username: '@snow',
      email: 'snow@gmail.com',
      age: '20'
    },
    {
      id: 5,
      firstName: 'Jack',
      lastName: 'Sparrow',
      username: '@jack',
      email: 'jack@yandex.ru',
      age: '30'
    },
    {
      id: 6,
      firstName: 'Ann',
      lastName: 'Smith',
      username: '@ann',
      email: 'ann@gmail.com',
      age: '21'
    },
    {
      id: 7,
      firstName: 'Barbara',
      lastName: 'Black',
      username: '@barbara',
      email: 'barbara@yandex.ru',
      age: '43'
    },
    {
      id: 8,
      firstName: 'Sevan',
      lastName: 'Bagrat',
      username: '@sevan',
      email: 'sevan@outlook.com',
      age: '13'
    },
    {
      id: 9,
      firstName: 'Ruben',
      lastName: 'Vardan',
      username: '@ruben',
      email: 'ruben@gmail.com',
      age: '22'
    },
    {
      id: 10,
      firstName: 'Karen',
      lastName: 'Sevan',
      username: '@karen',
      email: 'karen@yandex.ru',
      age: '33'
    },
    {
      id: 11,
      firstName: 'Mark',
      lastName: 'Otto',
      username: '@mark',
      email: 'mark@gmail.com',
      age: '38'
    },
    {
      id: 12,
      firstName: 'Jacob',
      lastName: 'Thornton',
      username: '@jacob',
      email: 'jacob@yandex.ru',
      age: '48'
    },
    {
      id: 13,
      firstName: 'Haik',
      lastName: 'Hakob',
      username: '@haik',
      email: 'haik@outlook.com',
      age: '48'
    },
    {
      id: 14,
      firstName: 'Garegin',
      lastName: 'Jirair',
      username: '@garegin',
      email: 'garegin@gmail.com',
      age: '40'
    },
    {
      id: 15,
      firstName: 'Krikor',
      lastName: 'Bedros',
      username: '@krikor',
      email: 'krikor@yandex.ru',
      age: '32'
    },
    {
      "id": 16,
      "firstName": "Francisca",
      "lastName": "Brady",
      "username": "@Gibson",
      "email": "franciscagibson@comtours.com",
      "age": 11
    },
    {
      "id": 17,
      "firstName": "Tillman",
      "lastName": "Figueroa",
      "username": "@Snow",
      "email": "tillmansnow@comtours.com",
      "age": 34
    },
    {
      "id": 18,
      "firstName": "Jimenez",
      "lastName": "Morris",
      "username": "@Bryant",
      "email": "jimenezbryant@comtours.com",
      "age": 45
    },
    {
      "id": 19,
      "firstName": "Sandoval",
      "lastName": "Jacobson",
      "username": "@Mcbride",
      "email": "sandovalmcbride@comtours.com",
      "age": 32
    },
    {
      "id": 20,
      "firstName": "Griffin",
      "lastName": "Torres",
      "username": "@Charles",
      "email": "griffincharles@comtours.com",
      "age": 19
    },
    {
      "id": 21,
      "firstName": "Cora",
      "lastName": "Parker",
      "username": "@Caldwell",
      "email": "coracaldwell@comtours.com",
      "age": 27
    },
    {
      "id": 22,
      "firstName": "Cindy",
      "lastName": "Bond",
      "username": "@Velez",
      "email": "cindyvelez@comtours.com",
      "age": 24
    },
    {
      "id": 23,
      "firstName": "Frieda",
      "lastName": "Tyson",
      "username": "@Craig",
      "email": "friedacraig@comtours.com",
      "age": 45
    },
    {
      "id": 24,
      "firstName": "Cote",
      "lastName": "Holcomb",
      "username": "@Rowe",
      "email": "coterowe@comtours.com",
      "age": 20
    },
    {
      "id": 25,
      "firstName": "Trujillo",
      "lastName": "Mejia",
      "username": "@Valenzuela",
      "email": "trujillovalenzuela@comtours.com",
      "age": 16
    },
    {
      "id": 26,
      "firstName": "Pruitt",
      "lastName": "Shepard",
      "username": "@Sloan",
      "email": "pruittsloan@comtours.com",
      "age": 44
    },
    {
      "id": 27,
      "firstName": "Sutton",
      "lastName": "Ortega",
      "username": "@Black",
      "email": "suttonblack@comtours.com",
      "age": 42
    },
    {
      "id": 28,
      "firstName": "Marion",
      "lastName": "Heath",
      "username": "@Espinoza",
      "email": "marionespinoza@comtours.com",
      "age": 47
    },
    {
      "id": 29,
      "firstName": "Newman",
      "lastName": "Hicks",
      "username": "@Keith",
      "email": "newmankeith@comtours.com",
      "age": 15
    },
    {
      "id": 30,
      "firstName": "Boyle",
      "lastName": "Larson",
      "username": "@Summers",
      "email": "boylesummers@comtours.com",
      "age": 32
    },
    {
      "id": 31,
      "firstName": "Haynes",
      "lastName": "Vinson",
      "username": "@Mckenzie",
      "email": "haynesmckenzie@comtours.com",
      "age": 15
    },
    {
      "id": 32,
      "firstName": "Miller",
      "lastName": "Acosta",
      "username": "@Young",
      "email": "milleryoung@comtours.com",
      "age": 55
    },
    {
      "id": 33,
      "firstName": "Johnston",
      "lastName": "Brown",
      "username": "@Knight",
      "email": "johnstonknight@comtours.com",
      "age": 29
    },
    {
      "id": 34,
      "firstName": "Lena",
      "lastName": "Pitts",
      "username": "@Forbes",
      "email": "lenaforbes@comtours.com",
      "age": 25
    },
    {
      "id": 35,
      "firstName": "Terrie",
      "lastName": "Kennedy",
      "username": "@Branch",
      "email": "terriebranch@comtours.com",
      "age": 37
    },
    {
      "id": 36,
      "firstName": "Louise",
      "lastName": "Aguirre",
      "username": "@Kirby",
      "email": "louisekirby@comtours.com",
      "age": 44
    },
    {
      "id": 37,
      "firstName": "David",
      "lastName": "Patton",
      "username": "@Sanders",
      "email": "davidsanders@comtours.com",
      "age": 26
    },
    {
      "id": 38,
      "firstName": "Holden",
      "lastName": "Barlow",
      "username": "@Mckinney",
      "email": "holdenmckinney@comtours.com",
      "age": 11
    },
    {
      "id": 39,
      "firstName": "Baker",
      "lastName": "Rivera",
      "username": "@Montoya",
      "email": "bakermontoya@comtours.com",
      "age": 47
    },
    {
      "id": 40,
      "firstName": "Belinda",
      "lastName": "Lloyd",
      "username": "@Calderon",
      "email": "belindacalderon@comtours.com",
      "age": 21
    },
    {
      "id": 41,
      "firstName": "Pearson",
      "lastName": "Patrick",
      "username": "@Clements",
      "email": "pearsonclements@comtours.com",
      "age": 42
    },
    {
      "id": 42,
      "firstName": "Alyce",
      "lastName": "Mckee",
      "username": "@Daugherty",
      "email": "alycedaugherty@comtours.com",
      "age": 55
    },
    {
      "id": 43,
      "firstName": "Valencia",
      "lastName": "Spence",
      "username": "@Olsen",
      "email": "valenciaolsen@comtours.com",
      "age": 20
    },
    {
      "id": 44,
      "firstName": "Leach",
      "lastName": "Holcomb",
      "username": "@Humphrey",
      "email": "leachhumphrey@comtours.com",
      "age": 28
    },
    {
      "id": 45,
      "firstName": "Moss",
      "lastName": "Baxter",
      "username": "@Fitzpatrick",
      "email": "mossfitzpatrick@comtours.com",
      "age": 51
    },
    {
      "id": 46,
      "firstName": "Jeanne",
      "lastName": "Cooke",
      "username": "@Ward",
      "email": "jeanneward@comtours.com",
      "age": 59
    },
    {
      "id": 47,
      "firstName": "Wilma",
      "lastName": "Briggs",
      "username": "@Kidd",
      "email": "wilmakidd@comtours.com",
      "age": 53
    },
    {
      "id": 48,
      "firstName": "Beatrice",
      "lastName": "Perry",
      "username": "@Gilbert",
      "email": "beatricegilbert@comtours.com",
      "age": 39
    },
    {
      "id": 49,
      "firstName": "Whitaker",
      "lastName": "Hyde",
      "username": "@Mcdonald",
      "email": "whitakermcdonald@comtours.com",
      "age": 35
    },
    {
      "id": 50,
      "firstName": "Rebekah",
      "lastName": "Duran",
      "username": "@Gross",
      "email": "rebekahgross@comtours.com",
      "age": 40
    },
    {
      "id": 51,
      "firstName": "Earline",
      "lastName": "Mayer",
      "username": "@Woodward",
      "email": "earlinewoodward@comtours.com",
      "age": 52
    },
    {
      "id": 52,
      "firstName": "Moran",
      "lastName": "Baxter",
      "username": "@Johns",
      "email": "moranjohns@comtours.com",
      "age": 20
    },
    {
      "id": 53,
      "firstName": "Nanette",
      "lastName": "Hubbard",
      "username": "@Cooke",
      "email": "nanettecooke@comtours.com",
      "age": 55
    },
    {
      "id": 54,
      "firstName": "Dalton",
      "lastName": "Walker",
      "username": "@Hendricks",
      "email": "daltonhendricks@comtours.com",
      "age": 25
    },
    {
      "id": 55,
      "firstName": "Bennett",
      "lastName": "Blake",
      "username": "@Pena",
      "email": "bennettpena@comtours.com",
      "age": 13
    },
    {
      "id": 56,
      "firstName": "Kellie",
      "lastName": "Horton",
      "username": "@Weiss",
      "email": "kellieweiss@comtours.com",
      "age": 48
    },
    {
      "id": 57,
      "firstName": "Hobbs",
      "lastName": "Talley",
      "username": "@Sanford",
      "email": "hobbssanford@comtours.com",
      "age": 28
    },
    {
      "id": 58,
      "firstName": "Mcguire",
      "lastName": "Donaldson",
      "username": "@Roman",
      "email": "mcguireroman@comtours.com",
      "age": 38
    },
    {
      "id": 59,
      "firstName": "Rodriquez",
      "lastName": "Saunders",
      "username": "@Harper",
      "email": "rodriquezharper@comtours.com",
      "age": 20
    },
    {
      "id": 60,
      "firstName": "Lou",
      "lastName": "Conner",
      "username": "@Sanchez",
      "email": "lousanchez@comtours.com",
      "age": 16
    }
  ];

  editableTableData: Array<any>;

  peopleTableData = [
    {
      id: 1,
      firstName: 'Mark',
      lastName: 'Otto',
      username: '@mdo',
      email: 'mdo@gmail.com',
      age: '28',
      status: 'info'
    },
    {
      id: 2,
      firstName: 'Jacob',
      lastName: 'Thornton',
      username: '@fat',
      email: 'fat@yandex.ru',
      age: '45',
      status: 'primary'
    },
    {
      id: 3,
      firstName: 'Larry',
      lastName: 'Bird',
      username: '@twitter',
      email: 'twitter@outlook.com',
      age: '18',
      status: 'success'
    },
    {
      id: 4,
      firstName: 'John',
      lastName: 'Snow',
      username: '@snow',
      email: 'snow@gmail.com',
      age: '20',
      status: 'danger'
    },
    {
      id: 5,
      firstName: 'Jack',
      lastName: 'Sparrow',
      username: '@jack',
      email: 'jack@yandex.ru',
      age: '30',
      status: 'warning'
    }
  ];

  peopleData = [
    {
      "name": "Tiger Nixon",
      "position": "System Architect",
      "salary": "$320,800",
      "start_date": "2011/04/25",
      "office": "Edinburgh",
      "extn": "5421"
    },
    {
      "name": "Garrett Winters",
      "position": "Accountant",
      "salary": "$170,750",
      "start_date": "2011/07/25",
      "office": "Tokyo",
      "extn": "8422"
    },
    {
      "name": "Ashton Cox",
      "position": "Junior Technical Author",
      "salary": "$86,000",
      "start_date": "2009/01/12",
      "office": "San Francisco",
      "extn": "1562"
    },
    {
      "name": "Cedric Kelly",
      "position": "Senior Javascript Developer",
      "salary": "$433,060",
      "start_date": "2012/03/29",
      "office": "Edinburgh",
      "extn": "6224"
    },
    {
      "name": "Airi Satou",
      "position": "Accountant",
      "salary": "$162,700",
      "start_date": "2008/11/28",
      "office": "Tokyo",
      "extn": "5407"
    },
    {
      "name": "Brielle Williamson",
      "position": "Integration Specialist",
      "salary": "$372,000",
      "start_date": "2012/12/02",
      "office": "New York",
      "extn": "4804"
    },
    {
      "name": "Herrod Chandler",
      "position": "Sales Assistant",
      "salary": "$137,500",
      "start_date": "2012/08/06",
      "office": "San Francisco",
      "extn": "9608"
    },
    {
      "name": "Rhona Davidson",
      "position": "Integration Specialist",
      "salary": "$327,900",
      "start_date": "2010/10/14",
      "office": "Tokyo",
      "extn": "6200"
    },
    {
      "name": "Colleen Hurst",
      "position": "Javascript Developer",
      "salary": "$205,500",
      "start_date": "2009/09/15",
      "office": "San Francisco",
      "extn": "2360"
    },
    {
      "name": "Sonya Frost",
      "position": "Software Engineer",
      "salary": "$103,600",
      "start_date": "2008/12/13",
      "office": "Edinburgh",
      "extn": "1667"
    },
    {
      "name": "Jena Gaines",
      "position": "Office Manager",
      "salary": "$90,560",
      "start_date": "2008/12/19",
      "office": "London",
      "extn": "3814"
    },
    {
      "name": "Quinn Flynn",
      "position": "Support Lead",
      "salary": "$342,000",
      "start_date": "2013/03/03",
      "office": "Edinburgh",
      "extn": "9497"
    },
    {
      "name": "Charde Marshall",
      "position": "Regional Director",
      "salary": "$470,600",
      "start_date": "2008/10/16",
      "office": "San Francisco",
      "extn": "6741"
    },
    {
      "name": "Haley Kennedy",
      "position": "Senior Marketing Designer",
      "salary": "$313,500",
      "start_date": "2012/12/18",
      "office": "London",
      "extn": "3597"
    },
    {
      "name": "Tatyana Fitzpatrick",
      "position": "Regional Director",
      "salary": "$385,750",
      "start_date": "2010/03/17",
      "office": "London",
      "extn": "1965"
    },
    {
      "name": "Michael Silva",
      "position": "Marketing Designer",
      "salary": "$198,500",
      "start_date": "2012/11/27",
      "office": "London",
      "extn": "1581"
    },
    {
      "name": "Paul Byrd",
      "position": "Chief Financial Officer (CFO)",
      "salary": "$725,000",
      "start_date": "2010/06/09",
      "office": "New York",
      "extn": "3059"
    },
    {
      "name": "Gloria Little",
      "position": "Systems Administrator",
      "salary": "$237,500",
      "start_date": "2009/04/10",
      "office": "New York",
      "extn": "1721"
    },
    {
      "name": "Bradley Greer",
      "position": "Software Engineer",
      "salary": "$132,000",
      "start_date": "2012/10/13",
      "office": "London",
      "extn": "2558"
    },
    {
      "name": "Dai Rios",
      "position": "Personnel Lead",
      "salary": "$217,500",
      "start_date": "2012/09/26",
      "office": "Edinburgh",
      "extn": "2290"
    },
    {
      "name": "Jenette Caldwell",
      "position": "Development Lead",
      "salary": "$345,000",
      "start_date": "2011/09/03",
      "office": "New York",
      "extn": "1937"
    },
    {
      "name": "Yuri Berry",
      "position": "Chief Marketing Officer (CMO)",
      "salary": "$675,000",
      "start_date": "2009/06/25",
      "office": "New York",
      "extn": "6154"
    },
    {
      "name": "Caesar Vance",
      "position": "Pre-Sales Support",
      "salary": "$106,450",
      "start_date": "2011/12/12",
      "office": "New York",
      "extn": "8330"
    },
    {
      "name": "Doris Wilder",
      "position": "Sales Assistant",
      "salary": "$85,600",
      "start_date": "2010/09/20",
      "office": "Sidney",
      "extn": "3023"
    },
    {
      "name": "Angelica Ramos",
      "position": "Chief Executive Officer (CEO)",
      "salary": "$1,200,000",
      "start_date": "2009/10/09",
      "office": "London",
      "extn": "5797"
    },
    {
      "name": "Gavin Joyce",
      "position": "Developer",
      "salary": "$92,575",
      "start_date": "2010/12/22",
      "office": "Edinburgh",
      "extn": "8822"
    },
    {
      "name": "Jennifer Chang",
      "position": "Regional Director",
      "salary": "$357,650",
      "start_date": "2010/11/14",
      "office": "Singapore",
      "extn": "9239"
    },
    {
      "name": "Brenden Wagner",
      "position": "Software Engineer",
      "salary": "$206,850",
      "start_date": "2011/06/07",
      "office": "San Francisco",
      "extn": "1314"
    },
    {
      "name": "Fiona Green",
      "position": "Chief Operating Officer (COO)",
      "salary": "$850,000",
      "start_date": "2010/03/11",
      "office": "San Francisco",
      "extn": "2947"
    },
    {
      "name": "Shou Itou",
      "position": "Regional Marketing",
      "salary": "$163,000",
      "start_date": "2011/08/14",
      "office": "Tokyo",
      "extn": "8899"
    },
    {
      "name": "Michelle House",
      "position": "Integration Specialist",
      "salary": "$95,400",
      "start_date": "2011/06/02",
      "office": "Sidney",
      "extn": "2769"
    },
    {
      "name": "Suki Burks",
      "position": "Developer",
      "salary": "$114,500",
      "start_date": "2009/10/22",
      "office": "London",
      "extn": "6832"
    },
    {
      "name": "Prescott Bartlett",
      "position": "Technical Author",
      "salary": "$145,000",
      "start_date": "2011/05/07",
      "office": "London",
      "extn": "3606"
    },
    {
      "name": "Gavin Cortez",
      "position": "Team Leader",
      "salary": "$235,500",
      "start_date": "2008/10/26",
      "office": "San Francisco",
      "extn": "2860"
    },
    {
      "name": "Martena Mccray",
      "position": "Post-Sales support",
      "salary": "$324,050",
      "start_date": "2011/03/09",
      "office": "Edinburgh",
      "extn": "8240"
    },
    {
      "name": "Unity Butler",
      "position": "Marketing Designer",
      "salary": "$85,675",
      "start_date": "2009/12/09",
      "office": "San Francisco",
      "extn": "5384"
    },
    {
      "name": "Howard Hatfield",
      "position": "Office Manager",
      "salary": "$164,500",
      "start_date": "2008/12/16",
      "office": "San Francisco",
      "extn": "7031"
    },
    {
      "name": "Hope Fuentes",
      "position": "Secretary",
      "salary": "$109,850",
      "start_date": "2010/02/12",
      "office": "San Francisco",
      "extn": "6318"
    },
    {
      "name": "Vivian Harrell",
      "position": "Financial Controller",
      "salary": "$452,500",
      "start_date": "2009/02/14",
      "office": "San Francisco",
      "extn": "9422"
    },
    {
      "name": "Timothy Mooney",
      "position": "Office Manager",
      "salary": "$136,200",
      "start_date": "2008/12/11",
      "office": "London",
      "extn": "7580"
    },
    {
      "name": "Jackson Bradshaw",
      "position": "Director",
      "salary": "$645,750",
      "start_date": "2008/09/26",
      "office": "New York",
      "extn": "1042"
    },
    {
      "name": "Olivia Liang",
      "position": "Support Engineer",
      "salary": "$234,500",
      "start_date": "2011/02/03",
      "office": "Singapore",
      "extn": "2120"
    },
    {
      "name": "Bruno Nash",
      "position": "Software Engineer",
      "salary": "$163,500",
      "start_date": "2011/05/03",
      "office": "London",
      "extn": "6222"
    },
    {
      "name": "Sakura Yamamoto",
      "position": "Support Engineer",
      "salary": "$139,575",
      "start_date": "2009/08/19",
      "office": "Tokyo",
      "extn": "9383"
    },
    {
      "name": "Thor Walton",
      "position": "Developer",
      "salary": "$98,540",
      "start_date": "2013/08/11",
      "office": "New York",
      "extn": "8327"
    },
    {
      "name": "Finn Camacho",
      "position": "Support Engineer",
      "salary": "$87,500",
      "start_date": "2009/07/07",
      "office": "San Francisco",
      "extn": "2927"
    },
    {
      "name": "Serge Baldwin",
      "position": "Data Coordinator",
      "salary": "$138,575",
      "start_date": "2012/04/09",
      "office": "Singapore",
      "extn": "8352"
    },
    {
      "name": "Zenaida Frank",
      "position": "Software Engineer",
      "salary": "$125,250",
      "start_date": "2010/01/04",
      "office": "New York",
      "extn": "7439"
    },
    {
      "name": "Zorita Serrano",
      "position": "Software Engineer",
      "salary": "$115,000",
      "start_date": "2012/06/01",
      "office": "San Francisco",
      "extn": "4389"
    },
    {
      "name": "Jennifer Acosta",
      "position": "Junior Javascript Developer",
      "salary": "$75,650",
      "start_date": "2013/02/01",
      "office": "Edinburgh",
      "extn": "3431"
    },
    {
      "name": "Cara Stevens",
      "position": "Sales Assistant",
      "salary": "$145,600",
      "start_date": "2011/12/06",
      "office": "New York",
      "extn": "3990"
    },
    {
      "name": "Hermione Butler",
      "position": "Regional Director",
      "salary": "$356,250",
      "start_date": "2011/03/21",
      "office": "London",
      "extn": "1016"
    },
    {
      "name": "Lael Greer",
      "position": "Systems Administrator",
      "salary": "$103,500",
      "start_date": "2009/02/27",
      "office": "London",
      "extn": "6733"
    },
    {
      "name": "Jonas Alexander",
      "position": "Developer",
      "salary": "$86,500",
      "start_date": "2010/07/14",
      "office": "San Francisco",
      "extn": "8196"
    },
    {
      "name": "Shad Decker",
      "position": "Regional Director",
      "salary": "$183,000",
      "start_date": "2008/11/13",
      "office": "Edinburgh",
      "extn": "6373"
    },
    {
      "name": "Michael Bruce",
      "position": "Javascript Developer",
      "salary": "$183,000",
      "start_date": "2011/06/27",
      "office": "Singapore",
      "extn": "5384"
    },
    {
      "name": "Donna Snider",
      "position": "Customer Support",
      "salary": "$112,000",
      "start_date": "2011/01/25",
      "office": "New York",
      "extn": "4226"
    }
  ];

  tableData = [
    {
      image: 'app/browsers/chrome.svg',
      browser: 'Google Chrome',
      visits: '10,392',
      isVisitsUp: true,
      purchases: '4,214',
      isPurchasesUp: true,
      percent: '45%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/firefox.svg',
      browser: 'Mozilla Firefox',
      visits: '7,873',
      isVisitsUp: true,
      purchases: '3,031',
      isPurchasesUp: false,
      percent: '28%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/ie.svg',
      browser: 'Internet Explorer',
      visits: '5,890',
      isVisitsUp: false,
      purchases: '2,102',
      isPurchasesUp: false,
      percent: '17%',
      isPercentUp: false
    },
    {
      image: 'app/browsers/safari.svg',
      browser: 'Safari',
      visits: '4,001',
      isVisitsUp: false,
      purchases: '1,001',
      isPurchasesUp: false,
      percent: '14%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/opera.svg',
      browser: 'Opera',
      visits: '1,833',
      isVisitsUp: true,
      purchases: '83',
      isPurchasesUp: true,
      percent: '5%',
      isPercentUp: false
    }
  ];

  users = [
    {
      "id": 1,
      "name": "Esther Vang",
      "status": 4,
      "group": 3
    },
    {
      "id": 2,
      "name": "Leah Freeman",
      "status": 3,
      "group": 1
    },
    {
      "id": 3,
      "name": "Mathews Simpson",
      "status": 3,
      "group": 2
    },
    {
      "id": 4,
      "name": "Buckley Hopkins",
      "group": 4
    },
    {
      "id": 5,
      "name": "Buckley Schwartz",
      "status": 1,
      "group": 1
    },
    {
      "id": 6,
      "name": "Mathews Hopkins",
      "status": 4,
      "group": 2
    },
    {
      "id": 7,
      "name": "Leah Vang",
      "status": 4,
      "group": 1
    },
    {
      "id": 8,
      "name": "Vang Schwartz",
      "status": 4,
      "group": 2
    },
    {
      "id": 9,
      "name": "Hopkin Esther",
      "status": 1,
      "group": 2
    },
    {
      "id": 10,
      "name": "Mathews Schwartz",
      "status": 1,
      "group": 3
    }
  ];

  statuses = [
    { value: 1, text: 'Good' },
    { value: 2, text: 'Awesome' },
    { value: 3, text: 'Excellent' },
  ];

  groups = [
    { id: 1, text: 'user' },
    { id: 2, text: 'customer' },
    { id: 3, text: 'vip' },
    { id: 4, text: 'admin' }
  ];

  constructor() {
    this.editableTableData = this.smartTableData.slice(0, 36);
  }
}
