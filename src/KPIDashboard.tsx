//@ts-nocheck
import { useState, useMemo } from 'react';
import { Filter, TrendingUp, Wifi, Globe, BarChart3 } from 'lucide-react';

const KPIDashboard = () => {
  // Sample data - replace with your actual data
  const kpiData =[
  {
    "KPI": "ERCS_BSS_Total_Traffic_Erlangs",
    "Time Granularity": "24 Hrs",
    "Circle": "ASM",
    "2025-08-31 16:00": "7233.38",
    "2025-08-31 17:00": "7263.37",
    "2025-08-31 18:00": "11693.65",
    "2025-08-31 19:00": "15655.68",
    "Tech": "2G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652588202"
  },
  {
    "KPI": "ERCS_BSS_Total_Payload_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "ASM",
    "2025-08-31 16:00": "116.45",
    "2025-08-31 17:00": "111.83",
    "2025-08-31 18:00": "138.34",
    "2025-08-31 19:00": "106.39",
    "Tech": "2G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652588202"
  },
  {
    "KPI": "ERCS_VoLTE_Traffic_Erls",
    "Time Granularity": "24 Hrs",
    "Circle": "ASM",
    "2025-08-31 16:00": "10161.52",
    "2025-08-31 17:00": "10878.15",
    "2025-08-31 18:00": "5548.76",
    "2025-08-31 19:00": "",
    "Tech": "4G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652588202"
  },
  {
    "KPI": "ERIC_5G_DL MAC Data Volume_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "ASM",
    "2025-08-31 16:00": "",
    "2025-08-31 17:00": "",
    "2025-08-31 18:00": "",
    "2025-08-31 19:00": "",
    "Tech": "5G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652588202"
  },
  {
    "KPI": "Ericsson_Total_Data_Payload_TB",
    "Time Granularity": "24 Hrs",
    "Circle": "ASM",
    "2025-08-31 16:00": "26.35",
    "2025-08-31 17:00": "23.25",
    "2025-08-31 18:00": "9.58",
    "2025-08-31 19:00": "",
    "Tech": "4G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652588202"
  },
  {
    "KPI": "ERCS_BSS_Total_Traffic_Erlangs",
    "Time Granularity": "24 Hrs",
    "Circle": "NES",
    "2025-08-31 16:00": "2275.78",
    "2025-08-31 17:00": "2307.88",
    "2025-08-31 18:00": "3219.95",
    "2025-08-31 19:00": "3821.90",
    "Tech": "2G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652600520"
  },
  {
    "KPI": "Ericsson_Total_Data_Payload_TB",
    "Time Granularity": "24 Hrs",
    "Circle": "NES",
    "2025-08-31 16:00": "10.51",
    "2025-08-31 17:00": "8.94",
    "2025-08-31 18:00": "5.30",
    "2025-08-31 19:00": "0.83",
    "Tech": "4G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652600520"
  },
  {
    "KPI": "ERCS_VoLTE_Traffic_Erls",
    "Time Granularity": "24 Hrs",
    "Circle": "NES",
    "2025-08-31 16:00": "3859.36",
    "2025-08-31 17:00": "3754.35",
    "2025-08-31 18:00": "2562.73",
    "2025-08-31 19:00": "406.82",
    "Tech": "4G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652600520"
  },
  {
    "KPI": "ERIC_5G_DL MAC Data Volume_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "NES",
    "2025-08-31 16:00": "",
    "2025-08-31 17:00": "",
    "2025-08-31 18:00": "",
    "2025-08-31 19:00": "",
    "Tech": "5G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652600520"
  },
  {
    "KPI": "ERCS_BSS_Total_Payload_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "NES",
    "2025-08-31 16:00": "44.25",
    "2025-08-31 17:00": "41.84",
    "2025-08-31 18:00": "45.13",
    "2025-08-31 19:00": "32.85",
    "Tech": "2G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652600520"
  },
  {
    "KPI": "ERCS_BSS_Total_Payload_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "RAJ",
    "2025-08-31 16:00": "318.45",
    "2025-08-31 17:00": "312.28",
    "2025-08-31 18:00": "316.40",
    "2025-08-31 19:00": "318.52",
    "Tech": "2G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652610044"
  },
  {
    "KPI": "ERCS_BSS_Total_Traffic_Erlangs",
    "Time Granularity": "24 Hrs",
    "Circle": "RAJ",
    "2025-08-31 16:00": "36440.11",
    "2025-08-31 17:00": "38437.45",
    "2025-08-31 18:00": "40915.49",
    "2025-08-31 19:00": "49720.84",
    "Tech": "2G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652610044"
  },
  {
    "KPI": "ERIC_5G_DL MAC Data Volume_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "RAJ",
    "2025-08-31 16:00": "2255.39",
    "2025-08-31 17:00": "2095.31",
    "2025-08-31 18:00": "2158.76",
    "2025-08-31 19:00": "1269.08",
    "Tech": "5G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652610044"
  },
  {
    "KPI": "Ericsson_Total_Data_Payload_TB",
    "Time Granularity": "24 Hrs",
    "Circle": "RAJ",
    "2025-08-31 16:00": "140.30",
    "2025-08-31 17:00": "134.10",
    "2025-08-31 18:00": "136.37",
    "2025-08-31 19:00": "49.46",
    "Tech": "4G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652610044"
  },
  {
    "KPI": "ERCS_VoLTE_Traffic_Erls",
    "Time Granularity": "24 Hrs",
    "Circle": "RAJ",
    "2025-08-31 16:00": "77203.84",
    "2025-08-31 17:00": "84709.32",
    "2025-08-31 18:00": "92112.76",
    "2025-08-31 19:00": "32800.85",
    "Tech": "4G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652610044"
  },
  {
    "KPI": "ERCS_BSS_Total_Payload_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "GUJ",
    "2025-08-31 16:00": "195.84",
    "2025-08-31 17:00": "191.89",
    "2025-08-31 18:00": "198.08",
    "2025-08-31 19:00": "211.59",
    "Tech": "2G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652616386"
  },
  {
    "KPI": "ERCS_VoLTE_Traffic_Erls",
    "Time Granularity": "24 Hrs",
    "Circle": "GUJ",
    "2025-08-31 16:00": "67402.92",
    "2025-08-31 17:00": "79780.35",
    "2025-08-31 18:00": "86566.72",
    "2025-08-31 19:00": "60406.73",
    "Tech": "4G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652616386"
  },
  {
    "KPI": "Ericsson_Total_Data_Payload_TB",
    "Time Granularity": "24 Hrs",
    "Circle": "GUJ",
    "2025-08-31 16:00": "155.96",
    "2025-08-31 17:00": "151.48",
    "2025-08-31 18:00": "157.79",
    "2025-08-31 19:00": "116.11",
    "Tech": "4G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652616386"
  },
  {
    "KPI": "ERCS_BSS_Total_Traffic_Erlangs",
    "Time Granularity": "24 Hrs",
    "Circle": "GUJ",
    "2025-08-31 16:00": "41813.37",
    "2025-08-31 17:00": "45617.47",
    "2025-08-31 18:00": "47785.59",
    "2025-08-31 19:00": "55402.29",
    "Tech": "2G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652616386"
  },
  {
    "KPI": "ERIC_5G_DL MAC Data Volume_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "GUJ",
    "2025-08-31 16:00": "2425.13",
    "2025-08-31 17:00": "2318.87",
    "2025-08-31 18:00": "2385.88",
    "2025-08-31 19:00": "2464.99",
    "Tech": "5G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652616386"
  },
  {
    "KPI": "ERIC_5G_DL MAC Data Volume_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "JNK",
    "2025-08-31 16:00": "",
    "2025-08-31 17:00": "",
    "2025-08-31 18:00": "",
    "2025-08-31 19:00": "",
    "Tech": "5G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652624596"
  },
  {
    "KPI": "Ericsson_Total_Data_Payload_TB",
    "Time Granularity": "24 Hrs",
    "Circle": "JNK",
    "2025-08-31 16:00": "2.18",
    "2025-08-31 17:00": "2.05",
    "2025-08-31 18:00": "2.09",
    "2025-08-31 19:00": "1.29",
    "Tech": "4G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652624596"
  },
  {
    "KPI": "ERCS_VoLTE_Traffic_Erls",
    "Time Granularity": "24 Hrs",
    "Circle": "JNK",
    "2025-08-31 16:00": "1125.13",
    "2025-08-31 17:00": "1153.72",
    "2025-08-31 18:00": "1341.53",
    "2025-08-31 19:00": "920.49",
    "Tech": "4G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652624596"
  },
  {
    "KPI": "ERCS_BSS_Total_Traffic_Erlangs",
    "Time Granularity": "24 Hrs",
    "Circle": "JNK",
    "2025-08-31 16:00": "1802.63",
    "2025-08-31 17:00": "1806.20",
    "2025-08-31 18:00": "1960.99",
    "2025-08-31 19:00": "2254.28",
    "Tech": "2G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652624596"
  },
  {
    "KPI": "ERCS_BSS_Total_Payload_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "JNK",
    "2025-08-31 16:00": "14.27",
    "2025-08-31 17:00": "14.67",
    "2025-08-31 18:00": "14.02",
    "2025-08-31 19:00": "13.95",
    "Tech": "2G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652624596"
  },
  {
    "KPI": "ERCS_BSS_Total_Payload_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "HPR",
    "2025-08-31 16:00": "26.56",
    "2025-08-31 17:00": "29.50",
    "2025-08-31 18:00": "26.04",
    "2025-08-31 19:00": "22.65",
    "Tech": "2G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652629180"
  },
  {
    "KPI": "Ericsson_Total_Data_Payload_TB",
    "Time Granularity": "24 Hrs",
    "Circle": "HPR",
    "2025-08-31 16:00": "6.53",
    "2025-08-31 17:00": "6.21",
    "2025-08-31 18:00": "6.25",
    "2025-08-31 19:00": "4.24",
    "Tech": "4G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652629180"
  },
  {
    "KPI": "ERCS_BSS_Total_Traffic_Erlangs",
    "Time Granularity": "24 Hrs",
    "Circle": "HPR",
    "2025-08-31 16:00": "2493.38",
    "2025-08-31 17:00": "2624.13",
    "2025-08-31 18:00": "2729.14",
    "2025-08-31 19:00": "3300.92",
    "Tech": "2G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652629180"
  },
  {
    "KPI": "ERIC_5G_DL MAC Data Volume_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "HPR",
    "2025-08-31 16:00": "",
    "2025-08-31 17:00": "",
    "2025-08-31 18:00": "",
    "2025-08-31 19:00": "",
    "Tech": "5G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652629180"
  },
  {
    "KPI": "ERCS_VoLTE_Traffic_Erls",
    "Time Granularity": "24 Hrs",
    "Circle": "HPR",
    "2025-08-31 16:00": "2907.28",
    "2025-08-31 17:00": "3251.43",
    "2025-08-31 18:00": "3599.27",
    "2025-08-31 19:00": "2598.47",
    "Tech": "4G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652629180"
  },
  {
    "KPI": "ERCS_BSS_Total_Payload_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "MPCG",
    "2025-08-31 16:00": "520.85",
    "2025-08-31 17:00": "507.53",
    "2025-08-31 18:00": "534.82",
    "2025-08-31 19:00": "500.93",
    "Tech": "2G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652647247"
  },
  {
    "KPI": "ERIC_5G_DL MAC Data Volume_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "MPCG",
    "2025-08-31 16:00": "1821.82",
    "2025-08-31 17:00": "1745.04",
    "2025-08-31 18:00": "1777.70",
    "2025-08-31 19:00": "1930.01",
    "Tech": "5G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652647247"
  },
  {
    "KPI": "Ericsson_Total_Data_Payload_TB",
    "Time Granularity": "24 Hrs",
    "Circle": "MPCG",
    "2025-08-31 16:00": "253.91",
    "2025-08-31 17:00": "244.58",
    "2025-08-31 18:00": "193.08",
    "2025-08-31 19:00": "31.42",
    "Tech": "4G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652647247"
  },
  {
    "KPI": "ERCS_BSS_Total_Traffic_Erlangs",
    "Time Granularity": "24 Hrs",
    "Circle": "MPCG",
    "2025-08-31 16:00": "112658.43",
    "2025-08-31 17:00": "117880.39",
    "2025-08-31 18:00": "132337.31",
    "2025-08-31 19:00": "175548.74",
    "Tech": "2G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652647247"
  },
  {
    "KPI": "ERCS_VoLTE_Traffic_Erls",
    "Time Granularity": "24 Hrs",
    "Circle": "MPCG",
    "2025-08-31 16:00": "140976.55",
    "2025-08-31 17:00": "151350.36",
    "2025-08-31 18:00": "129293.48",
    "2025-08-31 19:00": "22257.11",
    "Tech": "4G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652647247"
  },
  {
    "KPI": "Ericsson_Total_Data_Payload_TB",
    "Time Granularity": "24 Hrs",
    "Circle": "MAH",
    "2025-08-31 16:00": "406.53",
    "2025-08-31 17:00": "384.96",
    "2025-08-31 18:00": "351.07",
    "2025-08-31 19:00": "88.39",
    "Tech": "4G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652660021"
  },
  {
    "KPI": "ERCS_VoLTE_Traffic_Erls",
    "Time Granularity": "24 Hrs",
    "Circle": "MAH",
    "2025-08-31 16:00": "211488.94",
    "2025-08-31 17:00": "227005.45",
    "2025-08-31 18:00": "226240.58",
    "2025-08-31 19:00": "58291.32",
    "Tech": "4G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652660021"
  },
  {
    "KPI": "ERCS_BSS_Total_Payload_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "MAH",
    "2025-08-31 16:00": "1531.87",
    "2025-08-31 17:00": "1488.28",
    "2025-08-31 18:00": "1512.09",
    "2025-08-31 19:00": "1471.82",
    "Tech": "2G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652660021"
  },
  {
    "KPI": "ERCS_BSS_Total_Traffic_Erlangs",
    "Time Granularity": "24 Hrs",
    "Circle": "MAH",
    "2025-08-31 16:00": "141665.14",
    "2025-08-31 17:00": "149456.71",
    "2025-08-31 18:00": "163548.89",
    "2025-08-31 19:00": "198480.33",
    "Tech": "2G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652660021"
  },
  {
    "KPI": "ERIC_5G_DL MAC Data Volume_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "MAH",
    "2025-08-31 16:00": "12573.65",
    "2025-08-31 17:00": "12289.16",
    "2025-08-31 18:00": "12318.15",
    "2025-08-31 19:00": "10831.94",
    "Tech": "5G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652660021"
  },
  {
    "KPI": "Ericsson_Total_Data_Payload_TB",
    "Time Granularity": "24 Hrs",
    "Circle": "DEL",
    "2025-08-31 16:00": "53.97",
    "2025-08-31 17:00": "51.84",
    "2025-08-31 18:00": "50.44",
    "2025-08-31 19:00": "20.78",
    "Tech": "4G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652674780"
  },
  {
    "KPI": "ERCS_VoLTE_Traffic_Erls",
    "Time Granularity": "24 Hrs",
    "Circle": "DEL",
    "2025-08-31 16:00": "45499.39",
    "2025-08-31 17:00": "50244.75",
    "2025-08-31 18:00": "55399.48",
    "2025-08-31 19:00": "24466.50",
    "Tech": "4G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652674780"
  },
  {
    "KPI": "ERIC_5G_DL MAC Data Volume_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "DEL",
    "2025-08-31 16:00": "17192.02",
    "2025-08-31 17:00": "16718.47",
    "2025-08-31 18:00": "16388.58",
    "2025-08-31 19:00": "13257.60",
    "Tech": "5G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652674780"
  },
  {
    "KPI": "ERCS_BSS_Total_Traffic_Erlangs",
    "Time Granularity": "24 Hrs",
    "Circle": "DEL",
    "2025-08-31 16:00": "16280.91",
    "2025-08-31 17:00": "17001.31",
    "2025-08-31 18:00": "17802.55",
    "2025-08-31 19:00": "19215.28",
    "Tech": "2G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652674780"
  },
  {
    "KPI": "ERCS_BSS_Total_Payload_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "DEL",
    "2025-08-31 16:00": "14.79",
    "2025-08-31 17:00": "14.44",
    "2025-08-31 18:00": "15.14",
    "2025-08-31 19:00": "15.24",
    "Tech": "2G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652674780"
  },
  {
    "KPI": "ERCS_BSS_Total_Traffic_Erlangs",
    "Time Granularity": "24 Hrs",
    "Circle": "KER",
    "2025-08-31 16:00": "2277.21",
    "2025-08-31 17:00": "2536.54",
    "2025-08-31 18:00": "2509.61",
    "2025-08-31 19:00": "3107.77",
    "Tech": "2G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652681094"
  },
  {
    "KPI": "ERCS_VoLTE_Traffic_Erls",
    "Time Granularity": "24 Hrs",
    "Circle": "KER",
    "2025-08-31 16:00": "8181.88",
    "2025-08-31 17:00": "9150.72",
    "2025-08-31 18:00": "9486.17",
    "2025-08-31 19:00": "8677.91",
    "Tech": "4G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652681094"
  },
  {
    "KPI": "ERCS_BSS_Total_Payload_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "KER",
    "2025-08-31 16:00": "8.32",
    "2025-08-31 17:00": "11.65",
    "2025-08-31 18:00": "7.78",
    "2025-08-31 19:00": "7.83",
    "Tech": "2G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652681094"
  },
  {
    "KPI": "ERIC_5G_DL MAC Data Volume_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "KER",
    "2025-08-31 16:00": "2936.80",
    "2025-08-31 17:00": "2991.97",
    "2025-08-31 18:00": "2857.96",
    "2025-08-31 19:00": "1316.64",
    "Tech": "5G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652681094"
  },
  {
    "KPI": "Ericsson_Total_Data_Payload_TB",
    "Time Granularity": "24 Hrs",
    "Circle": "KER",
    "2025-08-31 16:00": "12.76",
    "2025-08-31 17:00": "12.39",
    "2025-08-31 18:00": "12.21",
    "2025-08-31 19:00": "10.06",
    "Tech": "4G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652681094"
  },
  {
    "KPI": "Ericsson_Total_Data_Payload_TB",
    "Time Granularity": "24 Hrs",
    "Circle": "PNB",
    "2025-08-31 16:00": "4.51",
    "2025-08-31 17:00": "4.49",
    "2025-08-31 18:00": "4.64",
    "2025-08-31 19:00": "3.18",
    "Tech": "4G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652687821"
  },
  {
    "KPI": "ERCS_VoLTE_Traffic_Erls",
    "Time Granularity": "24 Hrs",
    "Circle": "PNB",
    "2025-08-31 16:00": "76.06",
    "2025-08-31 17:00": "88.80",
    "2025-08-31 18:00": "92.32",
    "2025-08-31 19:00": "73.93",
    "Tech": "4G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652687821"
  },
  {
    "KPI": "ERCS_BSS_Total_Payload_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "PNB",
    "2025-08-31 16:00": "",
    "2025-08-31 17:00": "",
    "2025-08-31 18:00": "",
    "2025-08-31 19:00": "",
    "Tech": "2G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652687821"
  },
  {
    "KPI": "ERCS_BSS_Total_Traffic_Erlangs",
    "Time Granularity": "24 Hrs",
    "Circle": "PNB",
    "2025-08-31 16:00": "",
    "2025-08-31 17:00": "",
    "2025-08-31 18:00": "",
    "2025-08-31 19:00": "",
    "Tech": "2G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652687821"
  },
  {
    "KPI": "ERIC_5G_DL MAC Data Volume_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "PNB",
    "2025-08-31 16:00": "",
    "2025-08-31 17:00": "",
    "2025-08-31 18:00": "",
    "2025-08-31 19:00": "",
    "Tech": "5G",
    "Vendor": "Ericsson",
    "workflow_id": "Kpi_runtime_results-1756652687821"
  },
  {
    "KPI": "HUAWEI_BSS_Total_Traffic_Erlangs",
    "Time Granularity": "24 Hrs",
    "Circle": "ODI",
    "2025-08-31 16:00": "7804.57",
    "2025-08-31 17:00": "8281.09",
    "2025-08-31 18:00": "10399.74",
    "2025-08-31 19:00": "11361.55",
    "Tech": "2G",
    "Vendor": "Huawei",
    "workflow_id": "Kpi_runtime_results-1756652692495"
  },
  {
    "KPI": "HWI_2G_Data_Payload_in_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "ODI",
    "2025-08-31 16:00": "35.81",
    "2025-08-31 17:00": "34.30",
    "2025-08-31 18:00": "36.07",
    "2025-08-31 19:00": "28.72",
    "Tech": "2G",
    "Vendor": "Huawei",
    "workflow_id": "Kpi_runtime_results-1756652692495"
  },
  {
    "KPI": "HWI_LTE_Total Data Payload_MB",
    "Time Granularity": "24 Hrs",
    "Circle": "ODI",
    "2025-08-31 16:00": "12023827.27",
    "2025-08-31 17:00": "11448655.73",
    "2025-08-31 18:00": "11816814.59",
    "2025-08-31 19:00": "13456298.28",
    "Tech": "4G",
    "Vendor": "Huawei",
    "workflow_id": "Kpi_runtime_results-1756652692495"
  },
  {
    "KPI": "HUAWEI_VoLTE Traffic_Erls",
    "Time Granularity": "24 Hrs",
    "Circle": "ODI",
    "2025-08-31 16:00": "5767.68",
    "2025-08-31 17:00": "6797.76",
    "2025-08-31 18:00": "8374.72",
    "2025-08-31 19:00": "10554.27",
    "Tech": "4G",
    "Vendor": "Huawei",
    "workflow_id": "Kpi_runtime_results-1756652692495"
  },
  {
    "KPI": "HUAWEI_BSS_Total_Traffic_Erlangs",
    "Time Granularity": "24 Hrs",
    "Circle": "DEL",
    "2025-08-31 16:00": "25870.86",
    "2025-08-31 17:00": "24305.89",
    "2025-08-31 18:00": "26575.60",
    "2025-08-31 19:00": "30322.14",
    "Tech": "2G",
    "Vendor": "Huawei",
    "workflow_id": "Kpi_runtime_results-1756652697636"
  },
  {
    "KPI": "HWI_2G_Data_Payload_in_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "DEL",
    "2025-08-31 16:00": "69.42",
    "2025-08-31 17:00": "63.03",
    "2025-08-31 18:00": "65.27",
    "2025-08-31 19:00": "64.90",
    "Tech": "2G",
    "Vendor": "Huawei",
    "workflow_id": "Kpi_runtime_results-1756652697636"
  },
  {
    "KPI": "HWI_LTE_Total Data Payload_MB",
    "Time Granularity": "24 Hrs",
    "Circle": "DEL",
    "2025-08-31 16:00": "99317668.13",
    "2025-08-31 17:00": "94892160.75",
    "2025-08-31 18:00": "92611065.16",
    "2025-08-31 19:00": "98413808.13",
    "Tech": "4G",
    "Vendor": "Huawei",
    "workflow_id": "Kpi_runtime_results-1756652697636"
  },
  {
    "KPI": "HUAWEI_VoLTE Traffic_Erls",
    "Time Granularity": "24 Hrs",
    "Circle": "DEL",
    "2025-08-31 16:00": "65352.61",
    "2025-08-31 17:00": "73172.18",
    "2025-08-31 18:00": "83101.54",
    "2025-08-31 19:00": "95160.46",
    "Tech": "4G",
    "Vendor": "Huawei",
    "workflow_id": "Kpi_runtime_results-1756652697636"
  },
  {
    "KPI": "HUAWEI_VoLTE Traffic_Erls",
    "Time Granularity": "24 Hrs",
    "Circle": "KER",
    "2025-08-31 16:00": "109706.10",
    "2025-08-31 17:00": "125678.24",
    "2025-08-31 18:00": "132783.96",
    "2025-08-31 19:00": "107527.19",
    "Tech": "4G",
    "Vendor": "Huawei",
    "workflow_id": "Kpi_runtime_results-1756652702536"
  },
  {
    "KPI": "HWI_2G_Data_Payload_in_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "KER",
    "2025-08-31 16:00": "319.86",
    "2025-08-31 17:00": "270.60",
    "2025-08-31 18:00": "296.07",
    "2025-08-31 19:00": "261.69",
    "Tech": "2G",
    "Vendor": "Huawei",
    "workflow_id": "Kpi_runtime_results-1756652702536"
  },
  {
    "KPI": "HWI_LTE_Total Data Payload_MB",
    "Time Granularity": "24 Hrs",
    "Circle": "KER",
    "2025-08-31 16:00": "218675920.25",
    "2025-08-31 17:00": "210942727.66",
    "2025-08-31 18:00": "211695297.49",
    "2025-08-31 19:00": "159693065.78",
    "Tech": "4G",
    "Vendor": "Huawei",
    "workflow_id": "Kpi_runtime_results-1756652702536"
  },
  {
    "KPI": "HUAWEI_BSS_Total_Traffic_Erlangs",
    "Time Granularity": "24 Hrs",
    "Circle": "KER",
    "2025-08-31 16:00": "82872.89",
    "2025-08-31 17:00": "81233.50",
    "2025-08-31 18:00": "95044.88",
    "2025-08-31 19:00": "103710.92",
    "Tech": "2G",
    "Vendor": "Huawei",
    "workflow_id": "Kpi_runtime_results-1756652702536"
  },
  {
    "KPI": "HUAWEI_VoLTE Traffic_Erls",
    "Time Granularity": "24 Hrs",
    "value": "NaN",
    "Tech": "4G",
    "Vendor": "Huawei",
    "Circle": "CHN",
    "workflow_id": "Kpi_runtime_results-1756652708819"
  },
  {
    "KPI": "HWI_LTE_Total Data Payload_MB",
    "Time Granularity": "24 Hrs",
    "value": "NaN",
    "Tech": "4G",
    "Vendor": "Huawei",
    "Circle": "CHN",
    "workflow_id": "Kpi_runtime_results-1756652708819"
  },
  {
    "KPI": "HUAWEI_BSS_Total_Traffic_Erlangs",
    "Time Granularity": "24 Hrs",
    "value": "NaN",
    "Tech": "2G",
    "Vendor": "Huawei",
    "Circle": "CHN",
    "workflow_id": "Kpi_runtime_results-1756652708819"
  },
  {
    "KPI": "HWI_2G_Data_Payload_in_GB",
    "Time Granularity": "24 Hrs",
    "value": "NaN",
    "Tech": "2G",
    "Vendor": "Huawei",
    "Circle": "CHN",
    "workflow_id": "Kpi_runtime_results-1756652708819"
  },
  {
    "KPI": "HWI_2G_Data_Payload_in_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "BIH",
    "2025-08-31 16:00": "80.82",
    "2025-08-31 17:00": "77.19",
    "2025-08-31 18:00": "85.05",
    "2025-08-31 19:00": "78.17",
    "Tech": "2G",
    "Vendor": "Huawei",
    "workflow_id": "Kpi_runtime_results-1756652713401"
  },
  {
    "KPI": "HUAWEI_VoLTE Traffic_Erls",
    "Time Granularity": "24 Hrs",
    "Circle": "BIH",
    "2025-08-31 16:00": "51795.49",
    "2025-08-31 17:00": "56822.16",
    "2025-08-31 18:00": "62732.97",
    "2025-08-31 19:00": "81317.77",
    "Tech": "4G",
    "Vendor": "Huawei",
    "workflow_id": "Kpi_runtime_results-1756652713401"
  },
  {
    "KPI": "HUAWEI_BSS_Total_Traffic_Erlangs",
    "Time Granularity": "24 Hrs",
    "Circle": "BIH",
    "2025-08-31 16:00": "56744.56",
    "2025-08-31 17:00": "59106.88",
    "2025-08-31 18:00": "66683.51",
    "2025-08-31 19:00": "91287.91",
    "Tech": "2G",
    "Vendor": "Huawei",
    "workflow_id": "Kpi_runtime_results-1756652713401"
  },
  {
    "KPI": "HWI_LTE_Total Data Payload_MB",
    "Time Granularity": "24 Hrs",
    "Circle": "BIH",
    "2025-08-31 16:00": "78127926.98",
    "2025-08-31 17:00": "75344218.69",
    "2025-08-31 18:00": "76707981.95",
    "2025-08-31 19:00": "93124772.09",
    "Tech": "4G",
    "Vendor": "Huawei",
    "workflow_id": "Kpi_runtime_results-1756652713401"
  },
  {
    "KPI": "HUAWEI_BSS_Total_Traffic_Erlangs",
    "Time Granularity": "24 Hrs",
    "Circle": "KAR",
    "2025-08-31 16:00": "9978.89",
    "2025-08-31 17:00": "10835.90",
    "2025-08-31 18:00": "11783.24",
    "2025-08-31 19:00": "13277.88",
    "Tech": "2G",
    "Vendor": "Huawei",
    "workflow_id": "Kpi_runtime_results-1756652718736"
  },
  {
    "KPI": "HWI_LTE_Total Data Payload_MB",
    "Time Granularity": "24 Hrs",
    "Circle": "KAR",
    "2025-08-31 16:00": "60444546.43",
    "2025-08-31 17:00": "59922280.09",
    "2025-08-31 18:00": "61391418.60",
    "2025-08-31 19:00": "63432297.44",
    "Tech": "4G",
    "Vendor": "Huawei",
    "workflow_id": "Kpi_runtime_results-1756652718736"
  },
  {
    "KPI": "HUAWEI_VoLTE Traffic_Erls",
    "Time Granularity": "24 Hrs",
    "Circle": "KAR",
    "2025-08-31 16:00": "27042.23",
    "2025-08-31 17:00": "30597.81",
    "2025-08-31 18:00": "34583.01",
    "2025-08-31 19:00": "39516.91",
    "Tech": "4G",
    "Vendor": "Huawei",
    "workflow_id": "Kpi_runtime_results-1756652718736"
  },
  {
    "KPI": "HWI_2G_Data_Payload_in_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "KAR",
    "2025-08-31 16:00": "55.05",
    "2025-08-31 17:00": "55.43",
    "2025-08-31 18:00": "55.60",
    "2025-08-31 19:00": "55.99",
    "Tech": "2G",
    "Vendor": "Huawei",
    "workflow_id": "Kpi_runtime_results-1756652718736"
  },
  {
    "KPI": "HUAWEI_VoLTE Traffic_Erls",
    "Time Granularity": "24 Hrs",
    "Circle": "PNB",
    "2025-08-31 16:00": "74492.91",
    "2025-08-31 17:00": "80883.97",
    "2025-08-31 18:00": "84007.57",
    "2025-08-31 19:00": "75660.16",
    "Tech": "4G",
    "Vendor": "Huawei",
    "workflow_id": "Kpi_runtime_results-1756652723307"
  },
  {
    "KPI": "HWI_LTE_Total Data Payload_MB",
    "Time Granularity": "24 Hrs",
    "Circle": "PNB",
    "2025-08-31 16:00": "134167676.29",
    "2025-08-31 17:00": "127358409.97",
    "2025-08-31 18:00": "126941787.72",
    "2025-08-31 19:00": "118760816.35",
    "Tech": "4G",
    "Vendor": "Huawei",
    "workflow_id": "Kpi_runtime_results-1756652723307"
  },
  {
    "KPI": "HUAWEI_BSS_Total_Traffic_Erlangs",
    "Time Granularity": "24 Hrs",
    "Circle": "PNB",
    "2025-08-31 16:00": "29144.83",
    "2025-08-31 17:00": "30214.72",
    "2025-08-31 18:00": "22941.14",
    "2025-08-31 19:00": "33765.81",
    "Tech": "2G",
    "Vendor": "Huawei",
    "workflow_id": "Kpi_runtime_results-1756652723307"
  },
  {
    "KPI": "HWI_2G_Data_Payload_in_GB",
    "Time Granularity": "24 Hrs",
    "Circle": "PNB",
    "2025-08-31 16:00": "103.74",
    "2025-08-31 17:00": "98.55",
    "2025-08-31 18:00": "73.91",
    "2025-08-31 19:00": "100.92",
    "Tech": "2G",
    "Vendor": "Huawei",
    "workflow_id": "Kpi_runtime_results-1756652723307"
  }
];

  const [filters, setFilters] = useState({
    tech: '',
    circle: '',
    vendor: '',
    kpi: ''
  });

  // Get unique values for filter options
  const filterOptions = useMemo(() => {
    const techOptions = [...new Set(kpiData.map(item => item.Tech))].filter(Boolean);
    const circleOptions = [...new Set(kpiData.map(item => item.Circle))].filter(Boolean);
    const vendorOptions = [...new Set(kpiData.map(item => item.Vendor))].filter(Boolean);
    const kpiOptions = [...new Set(kpiData.map(item => item.KPI))].filter(Boolean);
    
    return { techOptions, circleOptions, vendorOptions, kpiOptions };
  }, []);

  // Filter data based on selected filters
  const filteredData = useMemo(() => {
    return kpiData.filter(item => {
      return (
        (!filters.tech || item.Tech === filters.tech) &&
        (!filters.circle || item.Circle === filters.circle) &&
        (!filters.vendor || item.Vendor === filters.vendor) &&
        (!filters.kpi || item.KPI === filters.kpi)
      );
    });
  }, [filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      tech: '',
      circle: '',
      vendor: '',
      kpi: ''
    });
  };

  const getTechIcon = (tech) => {
    switch (tech) {
      case '5G': return <Wifi className="w-5 h-5 text-purple-600" />;
      case '4G': return <TrendingUp className="w-5 h-5 text-blue-600" />;
      case '2G': return <BarChart3 className="w-5 h-5 text-green-600" />;
      default: return <Globe className="w-5 h-5 text-gray-600" />;
    }
  };

  const getTimeSlotData = (item) => {
    const timeSlots = ['2025-08-31 13:00', '2025-08-31 14:00', '2025-08-31 15:00', '2025-08-31 16:00'];
    return timeSlots.map(slot => ({
      date: slot.split(' ')[0],
      time: slot.split(' ')[1],
      value: item[slot] || 'N/A'
    }));
  };

  const getDataDate = (item) => {
    const timeSlots = ['2025-08-31 13:00', '2025-08-31 14:00', '2025-08-31 15:00', '2025-08-31 16:00'];
    const firstSlot = timeSlots.find(slot => item[slot]);
    return firstSlot ? firstSlot.split(' ')[0] : '2025-08-31';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-7 ">
      <div className="max-w-auto mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">KPI Dashboard</h1>
          <p className="text-gray-600">Monitor your network performance metrics</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Technology</label>
              <select
                value={filters.tech}
                onChange={(e) => handleFilterChange('tech', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Technologies</option>
                {filterOptions.techOptions.map(tech => (
                  <option key={tech} value={tech}>{tech}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Circle</label>
              <select
                value={filters.circle}
                onChange={(e) => handleFilterChange('circle', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Circles</option>
                {filterOptions.circleOptions.map(circle => (
                  <option key={circle} value={circle}>{circle}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Vendor</label>
              <select
                value={filters.vendor}
                onChange={(e) => handleFilterChange('vendor', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Vendors</option>
                {filterOptions.vendorOptions.map(vendor => (
                  <option key={vendor} value={vendor}>{vendor}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">KPI</label>
              <select
                value={filters.kpi}
                onChange={(e) => handleFilterChange('kpi', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All KPIs</option>
                {filterOptions.kpiOptions.map(kpi => (
                  <option key={kpi} value={kpi}>{kpi}</option>
                ))}
              </select>
            </div>
          </div>
          
          <button
            onClick={clearFilters}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
          >
            Clear Filters
          </button>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredData.length}</span> of <span className="font-semibold">{kpiData.length}</span> KPI records
          </p>
        </div>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredData.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getTechIcon(item.Tech)}
                    <span className="font-semibold text-sm">{item.Tech}</span>
                  </div>
                  <span className="text-xs text-black bg-white bg-opacity-20 px-2 py-1 rounded-full">
                    {item.Circle}
                  </span>
                </div>
                <h3 className="text-lg font-bold truncate" title={item.KPI}>
                  {item.KPI}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm opacity-90">{item.Vendor}</p>
                  <p className="text-xs text-black bg-white bg-opacity-20 px-2 py-1 rounded">
                    {getDataDate(item)}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4">
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-1">Time Granularity</p>
                  <p className="font-semibold">{item['Time Granularity']}</p>
                </div>

                {/* Time Series Data */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700 mb-2">Hourly Data</p>
                  {getTimeSlotData(item).map((slot, slotIndex) => (
                    <div key={slotIndex} className="flex justify-between items-center py-1 border-b border-gray-100 last:border-b-0">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-600">{slot.time}</span>
                        <span className="text-xs text-gray-400">{slot.date}</span>
                      </div>
                      <span className={`text-sm font-medium ${slot.value === 'N/A' ? 'text-gray-400' : 'text-gray-800'}`}>
                        {slot.value === 'N/A' ? 'No Data' : slot.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Workflow ID */}
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-500 truncate" title={item.workflow_id}>
                    Workflow: {item.workflow_id}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <BarChart3 className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No KPI data found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more results</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default KPIDashboard;

