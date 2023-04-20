import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Log from "../../assets/images/img.jpg";
import axios from "axios";

import './dashboard.scss'
import DashboardCard from "../../ui/DashboardCard";
import DashboardChart from "../../ui/DashboardChart";
import DashboardCategories from "../../ui/DashboardCategories";

const Dashboard = () => {

  const [dashBoardTitle, setDashBoardTitle] = useState([])
  const [dashBoardSubTitle, setDashBoardSubTitle] = useState([])
  const [analytics, setAnalytics] = useState([])
  const [salesReport, setSalesReport] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await axios.get('https://htd-db-json.vercel.app/dashboard')
      return res
    }
    getData().catch((err) => console.log(err))
    getData().then((res) => console.log(res))
    getData().then((res) => setDashBoardTitle(res.data.title))
    getData().then((res) => setDashBoardSubTitle(res.data.subTitle))
    getData().then((res) => setAnalytics(res.data.analytics))
    getData().then((res) => setSalesReport(res.data.charts))
    getData().then((res) => setCategories(res.data.categories))

  }, [])

  return (
    <div>
      <div className="row_header">
        <h2 className="page-header">Dashboard</h2>

        <div className="header_right-1">
          <div className="header-row">
            <p className="name_header">Hoang Thanh</p>
            <p className="name_header-1">ID: 111222333</p>
          </div>

          <div className="header_right">
            <img src={Log} alt="" />
          </div>
          
          <Link to={"/signIn/index"}>
            <button className="btn btn_outline">
              <i className="bx bx-log-out bx-flip-horizontal"></i>
            </button>
          </Link>
        </div>
      </div>

      <div className="dashboard-title">
        <h2>{dashBoardTitle}</h2>
        <p>{dashBoardSubTitle}</p>
      </div>

      <div className="dashboard-analytics">
        {
          analytics.map((item, index) => (
            <DashboardCard key={index} props={item}/>
          ))
        }
      </div>
      
      <div className="dashboard-charts-categories card_body">
        <div className="dashboard-charts col-8">
          <div className="card full-height">
            <h4>Sales Report</h4>
            <DashboardChart props={salesReport}/>
          </div>
        </div>

        <div className="dashboard-categories col-4">
          <div className="card full-height">
            <h4>Categories</h4>
            <DashboardCategories props={categories}/>
            {/* <DashboardCategories/> */}
          </div>
        </div>
      </div>

      <div>
        dsds
      </div>

    </div>
  );
};

export default Dashboard;
