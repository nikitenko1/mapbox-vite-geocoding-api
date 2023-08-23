import style from "./style.module.css";
import { useFilterStore } from "../../hooks/store/useFilterStore";
import { useMapStore } from "../../hooks/store/useMapStore";
import { getUserLocation } from "../../utils/getUserLocation";
import { HiOutlineLocationMarker } from "react-icons/hi";

export const MyLocationBtn = () => {
  const { backToMyLocation } = useMapStore();
  const { radius } = useFilterStore();

  const handleGoToLocation = async () => {
    let lnglat: [number, number] | null;
    lnglat = JSON.parse(sessionStorage.getItem("original-location")!);

    if (!lnglat) {
      lnglat = await getUserLocation();
    }

    backToMyLocation(lnglat, radius);
  };

  return (
    <button className={style.btn} onClick={handleGoToLocation} title="Go to my location">
      <HiOutlineLocationMarker className={style.icon} />
    </button>
  );
};
