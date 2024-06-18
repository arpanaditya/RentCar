// import { Button, Card, Col, DatePicker, Row } from "antd";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import DefaultLayout from "../components/DefaultLayout";
// import Spinner from "../components/Spinner";
// import { getAllCars } from "../redux/actions/carsActions";
// const { Meta } = Card;

// function Home() {
//   const { cars } = useSelector((state) => state.carsReducer);
//   const { loading } = useSelector((state) => state.alertsReducer);
//   const [totalCars, setTotalCars] = useState([]);
//   const { RangePicker } = DatePicker;
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllCars());
//   }, [dispatch]);

//   useEffect(() => {
//     setTotalCars(cars);
//   }, [cars]);

//   function setFilter(values) {}

//   return (
//     <DefaultLayout>
//       <div style={{backgroundColor: "#F8F9FA", textColor: "#212529"}}>
//         <Row className="mt-3" justify="center">
//           <Col lg={20} sm={24} className="d-flex justify-content-flex">
//             <RangePicker onChange={setFilter} />
//           </Col>
//         </Row>

//         {loading === true && <Spinner />}

//         <Row justify="center">
//           {cars.map((car) => {
//             return (
//               <Col
//                 key={car._id}
//                 lg={5}
//                 sm={24}
//                 xs={24}
//                 style={{
//                   padding: 5,
//                   margin: 5,
//                 }}
//               >
//                 <Card
//                   hoverable
//                   style={{
//                     width: 240,
//                   }}
//                   cover={
//                     <img alt="example" src={car.image} className="card-img" />
//                   }
//                 >
//                   <Meta title={car.name} description={car.rentPerHour} />
//                   <span
//                     style={{
//                       position: "relative",
//                       right: 25,
//                       bottom: 18,
//                       fontWeight: "bold",
//                     }}
//                   >
//                     Rs.{" "}
//                   </span>
//                   <div
//                     style={{
//                       padding: 5,
//                       marginTop: 10,
//                     }}
//                   >
//                     <Button type="primary">
//                       <Link to={`/booking/${car._id}`}>Book now</Link>
//                     </Button>
//                   </div>
//                 </Card>
//               </Col>
//             );
//           })}
//         </Row>
//       </div>
//     </DefaultLayout>
//   );
// }
import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../redux/actions/carsActions";
import { Col, DatePicker, Row, Card, Button, Input } from "antd";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
const { Meta } = Card;

function Home() {
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { RangePicker } = DatePicker;

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  useEffect(() => {
    setFilteredCars(cars);
  }, [cars]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredCars(
      cars.filter(
        (car) =>
          car.name.toLowerCase().includes(query) ||
          (car.description && car.description.toLowerCase().includes(query))
      )
    );
  };

  return (
    <DefaultLayout>
      <div
        style={{
          backgroundColor: "#F8F9FA",
          color: "#212529",
          padding: "20px",
          width: "118%",
          marginLeft: "-10%",
          marginTop: "-1%",
        }}
      >
        <Row className="mt-3" justify="center">
          <Col lg={20} sm={24} className="d-flex justify-content-between">
            <Input
              placeholder="Search for cars"
              value={searchQuery}
              onChange={handleSearch}
              style={{
                width: "20%",
                borderRadius: "4px",
                border: "2px solid gray",
              }}
            />
            {/* <RangePicker
              onChange={(values) => console.log(values)}
              style={{
                width: "20%",
                borderRadius: "4px",
                border: "2px solid gray",
              }}
            /> */}
          </Col>
        </Row>

        {loading && <Spinner />}

        <Row justify="center">
          {filteredCars.map((car) => (
            <Col
              key={car._id}
              lg={5}
              sm={24}
              xs={24}
              style={{ padding: 5, margin: 5 }}
            >
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="car" src={car.image} className="card-img" />}
              >
                <Meta title={car.name} description={`Rs. ${car.rentPerHour}`} />
                <div style={{ padding: 5, marginTop: 10 }}>
                  <Button type="primary">
                    <Link
                      to={`/booking/${car._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      Book now
                    </Link>
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </DefaultLayout>
  );
}

export default Home;
