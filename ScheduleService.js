import _ from 'lodash';
import moment from 'moment';
import data from './data.json';

class ScheduleService {
    constructor() {
    }

    getFutureTrains(direction) {
        return new Promise((resolve, reject) => {
            const now = moment();
            const trains = _(data[direction])
                .chain()
                .map(x => (
                    {
                        id: x.id,
                        eta: moment(x.eta, 'HH:mm'),
                        etd: moment(x.etd, 'HH:mm'),
                    })
                )
                .orderBy(x => x.etd)
                .map(x => Object.assign(x, { duration: x.eta.diff(x.etd, 'minutes') }))
                .map(x => Object.assign(x, { express: x.duration <= 45 }))
                .filter(x => x.etd > now)
                .value();

            resolve(trains);
        });
    }
}

export { ScheduleService };