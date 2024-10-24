import { useEffect } from "react";
import CarList from "./components/car-list";
import CarForm from "./components/car-form";
import {
  fetchCarsFailure,
  fetchCarsStart,
  fetchCarsSucess,
  toggleModalOpen,
} from "../../../redux/slices/car/carSlice";
import { getAllCars } from "../../../actions/cars/cars-actions";
import { useDispatch, useSelector } from "react-redux";

const Cars = () => {
  const {
    fetchLoading,
    cars,
    modalOpen: isOpen,
  } = useSelector((state) => state.car);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      dispatch(fetchCarsStart());
      const data = await getAllCars();
      dispatch(fetchCarsSucess(data));
    } catch (error) {
      console.error("Error fetching cars:", error);
    } finally {
      dispatch(fetchCarsFailure());
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center px-5 py-3">
        <h1 className="font-bold text-2xl md:text-3xl">Cars</h1>
        <button
          onClick={() => dispatch(toggleModalOpen())}
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          + New
        </button>
      </div>
      <CarList refresh={fetch} loading={fetchLoading} items={cars ?? []} />
      <CarForm open={isOpen} refresh={fetch} />
    </div>
  );
};

export default Cars;
