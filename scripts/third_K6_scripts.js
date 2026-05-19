import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 5,
    duration: '10s',
};

export default function () {
    let res = http.get('https://test.k6.io');

    console.log(`Status Code: ${res.status}`);

    sleep(1);
}