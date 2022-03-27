import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: [ "Nissan Skyline GT-R R34", " Subaru Impreza WRX STI", " Mitsubishi Lancer EVO 4", " Toyota GT-86" ]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer