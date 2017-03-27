import {
    HotelList
} from '../models/hotels.model'

export const apiHotelController = (req, res) => {
    res.send({
        results: HotelList(req.params.destinationId)
    });
}