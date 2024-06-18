// import React from "react";
// import { Button, Dropdown, Space } from "antd";

// const user = JSON.parse(localStorage.getItem("user"));

// const items = [
//   {
//     key: "1",
//     label: (
//       <a rel="noopener noreferrer" href="/">
//         Home
//       </a>
//     ),
//   },
//   {
//     key: "2",
//     label: (
//       <a rel="noopener noreferrer" href="/userbookings">
//         My Bookings
//       </a>
//     ),
//   },
//   {
//     key: "3",
//     label: (
//       <a rel="noopener noreferrer" href="/contact">
//         Contact
//       </a>
//     ),
//   },
//   {
//     key: "4",
//     label: (
//       <a rel="noopener noreferrer" href="/admin">
//         Admin Panel
//       </a>
//     ),
//   },
//   {
//     key: "5",
//     label: (
//       <a rel="noopener noreferrer" href="/addcar">
//         Add a Car
//       </a>
//     ),
//   },
//   {
//     key: "6",
//     label: (
//       <a
//         rel="noopener noreferrer"
//         href="/login"
//         onClick={() => {
//           localStorage.removeItem("user");
//           window.location.href = "/login";
//         }}
//       >
//         Logout
//       </a>
//     ),
//   },
// ];

// function DefaultLayout(props) {
//   return (
//     <div>
//       <div className="header">
//         <div
//           className="d-flex justify-content-between border"
//           style={{
//             padding: 10,
//           }}
//         >
//           <h1>
//             <a href="/" style={{ color: "black", textDecoration: "none" }}>
//               Rent car
//             </a>
//           </h1>
//           {user && user.admin === true ? (
//             <Space
//               direction="vertical"
//               style={{
//                 marginRight: 30,
//               }}
//             >
//               <Space wrap>
//                 <Dropdown
//                   menu={{
//                     items,
//                   }}
//                   placement="bottom"
//                 >
//                   <Button>{user.username}</Button>
//                 </Dropdown>
//               </Space>
//             </Space>
//           ) : (
//             <Space
//               direction="vertical"
//               style={{
//                 marginRight: 30,
//               }}
//             >
//               <Space wrap>
//                 <Dropdown
//                   menu={{
//                     items: items.filter((item) => item.key !== "4" && item.key !== "5"),
//                   }}
//                   placement="bottom"
//                 >
//                   <Button>{user.username}</Button>
//                 </Dropdown>
//               </Space>
//             </Space>
//           )}
//         </div>
//         <div className="content">{props.children}</div>
//       </div>
//     </div>
//   );
// }

// export default DefaultLayout;
// import React from "react";
// import { Button, Dropdown, Space, Layout, Menu } from "antd";

// // Parse user data from localStorage
// const user = JSON.parse(localStorage.getItem("user"));

// const items = [
//   {
//     key: "1",
//     label: (
//       <a href="/" style={{ color: "#0D1B2A", textDecoration: "none" }}>
//         Home
//       </a>
//     ),
//   },
//   {
//     key: "2",
//     label: (
//       <a
//         href="/userbookings"
//         style={{ color: "#0D1B2A", textDecoration: "none" }}
//       >
//         Bookings
//       </a>
//     ),
//   },
//   {
//     key: "3",
//     label: (
//       <a href="/contact" style={{ color: "#0D1B2A", textDecoration: "none" }}>
//         Contact
//       </a>
//     ),
//   },
//   {
//     key: "4",
//     label: (
//       <a href="/admin" style={{ color: "#0D1B2A", textDecoration: "none" }}>
//         Admin Panel
//       </a>
//     ),
//   },
//   {
//     key: "5",
//     label: (
//       <a href="/addcar" style={{ color: "#0D1B2A", textDecoration: "none" }}>
//         Add a Car
//       </a>
//     ),
//   },
//   {
//     key: "6",
//     label: (
//       <a
//         href="/login"
//         onClick={() => {
//           localStorage.removeItem("user");
//           window.location.href = "/login";
//         }}
//         style={{ color: "#0D1B2A", textDecoration: "none" }}
//       >
//         Logout
//       </a>
//     ),
//   },
// ];

// function DefaultLayout(props) {
//   return (
//     <div>
//       <Layout style={styles.layout}>
//         <Layout.Header style={styles.header}>
//           <div className="d-flex justify-content-between align-items-center">
//             <h1 style={styles.brand}>
//               <a href="/" style={styles.brandLink}>
//                 RentCar
//               </a>
//             </h1>
//             {user && user.admin ? (
//               <Dropdown menu={{ items }} placement="bottom">
//                 <Button style={styles.button}>Hello {user.username}</Button>
//               </Dropdown>
//             ) : (
//               <Dropdown
//                 menu={{
//                   items: items.filter(
//                     (item) => item.key !== "2" && item.key !== "4"
//                   ),
//                 }}
//                 placement="bottom"
//               >
//                 <Button style={styles.button}>Hello {user.username}</Button>
//               </Dropdown>
//             )}
//           </div>
//         </Layout.Header>
//         <Layout.Content style={styles.content}>{props.children}</Layout.Content>
//         <Layout.Footer style={styles.footer}>
//           © 2024 RentCar. All Rights Reserved.
//         </Layout.Footer>
//       </Layout>
//     </div>
//   );
// }

// const styles = {
//   layout: {
//     minHeight: "100vh",
//     backgroundColor: "#F8F9FA",
//     zIndex: "-10000", // Light gray background
//   },
//   header: {
//     backgroundColor: "#0D1B2A", // Navy blue background
//     padding: "0 20px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     height: "64px",
//   },
//   brand: {
//     color: "#FFFFFF", // White color for the brand text
//     margin: 0,
//     fontSize: "24px",
//     fontWeight: "bold",
//   },
//   brandLink: {
//     color: "#FFFFFF",
//     textDecoration: "none",
//   },
//   button: {
//     backgroundColor: "#0D1B2A", // Navy blue button background
//     borderColor: "#0D1B2A", // Navy blue border
//     color: "#FFFFFF", // White text
//     borderRadius: "5px",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//     position: "relative",
//     left: 1250,
//   },
//   content: {
//     padding: "20px",
//     backgroundColor: "#FFFFFF", // White content background
//     color: "#0D1B2A", // Navy blue text color
//   },
//   footer: {
//     textAlign: "center",
//     padding: "10px 0",
//     backgroundColor: "#0D1B2A", // Navy blue footer background
//     color: "#FFFFFF", // White text
//   },
// };

// export default DefaultLayout;
import React from "react";
import { Button, Dropdown, Layout } from "antd";

// Parse user data from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const items = [
  {
    key: "1",
    label: (
      <a href="/" style={{ color: "#0D1B2A", textDecoration: "none" }}>
        Home
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        href="/userbookings"
        style={{ color: "#0D1B2A", textDecoration: "none" }}
      >
        Bookings
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a href="/contact" style={{ color: "#0D1B2A", textDecoration: "none" }}>
        Contact
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a href="/admin" style={{ color: "#0D1B2A", textDecoration: "none" }}>
        Admin Panel
      </a>
    ),
  },
  {
    key: "5",
    label: (
      <a href="/addcar" style={{ color: "#0D1B2A", textDecoration: "none" }}>
        Add a Car
      </a>
    ),
  },
  {
    key: "6",
    label: (
      <a
        href="/login"
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
        style={{ color: "#0D1B2A", textDecoration: "none" }}
      >
        Logout
      </a>
    ),
  },
];

function DefaultLayout(props) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Header style={styles.header}>
        <div className="container" style={{width: "100%"}}>
          <div className="d-flex justify-content-between align-items-center">
            <h1 style={styles.brand}>
              <a href="/" style={styles.brandLink}>
                RentCar
              </a>
            </h1>
            {user && user.admin ? (
              <Dropdown menu={{ items }} placement="bottom">
                <Button style={styles.button}>Hello {user.username}</Button>
              </Dropdown>
            ) : (
              <Dropdown
                menu={{
                  items: items.filter(
                    (item) => item.key !== "2" && item.key !== "4"
                  ),
                }}
                placement="bottom"
              >
                <Button style={styles.button}>Hello {user.username}</Button>
              </Dropdown>
            )}
          </div>
        </div>
      </Layout.Header>
      <Layout.Content style={styles.content}>
        <div className="container">{props.children}</div>
      </Layout.Content>
      <Layout.Footer style={styles.footer}>
        © 2024 RentCar. All Rights Reserved.
      </Layout.Footer>
    </Layout>
  );
}

const styles = {
  header: {
    backgroundColor: "#0D1B2A", // Navy blue background
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
    position: "fixed",
    width: "100%",
    zIndex: 1000,
  },
  brand: {
    color: "#FFFFFF", // White color for the brand text
    margin: 0,
    fontSize: "24px",
    fontWeight: "bold",
  },
  brandLink: {
    color: "#FFFFFF",
    textDecoration: "none",
  },
  button: {
    backgroundColor: "#0D1B2A", // Navy blue button background
    borderColor: "#0D1B2A", // Navy blue border
    color: "#FFFFFF", // White text
    borderRadius: "5px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    position: "relative",
    left: "55px",
  },
  content: {
    padding: "20px",
    backgroundColor: "#FFFFFF", // White content background
    color: "#0D1B2A", // Navy blue text color
    marginTop: "64px", // Adjust for the fixed header height
  },
  footer: {
    textAlign: "center",
    padding: "10px 0",
    backgroundColor: "#0D1B2A", // Navy blue footer background
    color: "#FFFFFF", // White text
  },
};

export default DefaultLayout;
