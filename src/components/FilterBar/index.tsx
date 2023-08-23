import style from "./style.module.css";
import { UseForm } from "../../hooks/useForm";
import { MdDragHandle, MdLocalHotel } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoFastFood } from "react-icons/io5";
import { BsFillFuelPumpFill } from "react-icons/bs";

export const FilterBar = () => {
  const { handleChange, toggleShowBar, isShowBar, opt, radius } = UseForm();

  return (
    <aside className={`${style.containerFilter} ${isShowBar ? style.showCompleteBar : ""}`}>
      <div onMouseDown={toggleShowBar} className={style.draggable}>
        <MdDragHandle className={style.icon} />
      </div>
      <h2 className={style.title}>FIND YOUR PLACE</h2>
      <p className={style.descAside}>
        Findyourplace, allows you to quickly search for fast foods, supermarkets, hotels, bus stops
        and gas stations so you can relax or work away from home.
      </p>

      <hr className={style.separator} />

      <div className={style.contentAside}>
        <h4 className={style.subtitle}>Highlights</h4>
        <p className={style.descAside}>
          Select some of the default bookmarks that we have selected for you
        </p>

        <div className={style.containerButtons}>
          <div>
            <input
              className={style.radio}
              type="radio"
              name="search"
              id={opt.supermarket}
              onChange={handleChange}
              defaultChecked
            />
            <label className={style.item} htmlFor={opt.supermarket}>
              <AiOutlineShoppingCart className={style.icon_item} />
              Supermarkets
            </label>
          </div>
          <div>
            <input
              className={style.radio}
              type="radio"
              name="search"
              id={opt["fast food"]}
              onChange={handleChange}
            />
            <label className={style.item} htmlFor={opt["fast food"]}>
              <IoFastFood className={style.icon_item} />
              Fast food
            </label>
          </div>
          <div>
            <input
              className={style.radio}
              type="radio"
              name="search"
              id={opt["gas station"]}
              onChange={handleChange}
            />
            <label className={style.item} htmlFor={opt["gas station"]}>
              <BsFillFuelPumpFill className={style.icon_item} />
              Fuel
            </label>
          </div>
          <div>
            <input
              className={style.radio}
              type="radio"
              name="search"
              id={opt.hotel}
              onChange={handleChange}
            />
            <label className={style.item} htmlFor={opt.hotel}>
              <MdLocalHotel className={style.icon_item} />
              Hotels
            </label>
          </div>
        </div>

        <h5 className={style.subtitle}>
          Distance from my position <br /> 👉 ({radius} km)
        </h5>
        <div className={style.rangeContent}>
          <span className={style.number}>0</span>
          <input
            min={0}
            max={30}
            type="range"
            name="radius"
            id=""
            className={style.range}
            onChange={handleChange}
            value={radius}
          />
          <span className={style.number}>30</span>
        </div>
      </div>
    </aside>
  );
};
