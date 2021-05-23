import axios, { AxiosResponse } from 'axios';
import { FetchApiData} from '../fetchApiData';
import { User } from '../interfaces';

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('FetchApiData()', () => {
  test('should return user list', async () => {
    
    const users: User[] = [
        {
          id: { name: 'NINO', value: 'AA 05 54 02 R' },
          name: { title: 'Miss', first: 'Rachel', last: 'Larson' },
          email: 'rachel.larson@example.com',
          location: {
            city: 'Ripon',
            street: {
                number: 5278,
                name: "The Crescent"
            },
            country: 'United Kingdom',
            postcode: 'O9J 7BG'
          },
          phone: '017687 30595',
          pic: {
            large: 'https://randomuser.me/api/portraits/women/58.jpg',
            medium: 'https://randomuser.me/api/portraits/med/women/58.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/58.jpg'
          }
        }
    ];
    
    //Prepare the response we want to get from axios
    const mockedResponse: AxiosResponse = {
        data: {
            results: [
                {
                    gender: "female",
                    name: {
                        title: "Miss",
                        first: "Rachel",
                        last: "Larson"
                    },
                    location: {
                        street: {
                            number: 5278,
                            name: "The Crescent"
                        },
                        city: "Ripon",
                        state: "Norfolk",
                        country: "United Kingdom",
                        postcode: "O9J 7BG",
                        coordinates: {
                            latitude: "7.7272",
                            longitude: "96.4504"
                        },
                        timezone: {
                            offset: "+11:00",
                            description: "Magadan, Solomon Islands, New Caledonia"
                        }
                    },
                    email: "rachel.larson@example.com",
                    login: {
                        uuid: "c84f8dba-49a9-47d6-811d-bd1a98785a27",
                        username: "ticklishpanda870",
                        password: "barbara",
                        salt: "JPMD1yXe",
                        md5: "bca29d28c89962649a72abbc3f79c9d7",
                        sha1: "59bb78ed945fe7c2599b3cfcbfc72042084fb4aa",
                        sha256: "ccc985ccbd41ed9912e8244f011f8a270b48524f28023fa8bbca903ebf19bd1a"
                    },
                    dob: {
                        date: "1949-07-22T12:25:38.468Z",
                        age: 72
                    },
                    registered: {
                        date: "2013-12-12T09:34:25.564Z",
                        age: 8
                    },
                    phone: "017687 30595",
                    cell: "0744-395-058",
                    id: {
                        name: "NINO",
                        value: "AA 05 54 02 R"
                    },
                    picture: {
                        large: "https://randomuser.me/api/portraits/women/58.jpg",
                        medium: "https://randomuser.me/api/portraits/med/women/58.jpg",
                        thumbnail: "https://randomuser.me/api/portraits/thumb/women/58.jpg"
                    },
                    nat: "GB"
                }
            ],
            info: {
                seed: "f4f073c8d7813341",
                results: 1,
                page: 1,
                version: "1.3"
            }
        },
        status: 200,
        statusText: "",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'JWT fefege...'
        },
        config: {
            url: "https://randomuser.me/api",
            method: "get",
            headers: {
                Accept: "application/json, text/plain, */*"
            },
            transformRequest: [],
            transformResponse: [],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1
        },
        request: {}
    }
                                
    // Make the mock return the custom axios response
    mockedAxios.get.mockResolvedValueOnce(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();
    const data = await FetchApiData();
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(users);
  });
});