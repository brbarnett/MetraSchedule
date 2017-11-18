import _ from 'lodash';
import moment from 'moment';
import data from './data.json';

class ScheduleService {
    constructor() {

    }

    getFutureTrains(direction) {
        const now = moment();
        const trains = _(data[direction])
            .chain()
            .map(x => {
                return {
                    id: x.id,
                    eta: moment(x.eta, 'HH:mm'),
                    etd: moment(x.etd, 'HH:mm'),
                };
            })
            .filter(x => x.etd > now)
            .value();

        return trains;
    }
}

export { ScheduleService };