import { useState, useMemo } from 'react';
import { Filter, TrendingUp, Wifi, Globe, BarChart3 } from 'lucide-react';

const KPIDashboard = () => {
  // Sample data - replace with your actual data
  const kpiData = [
    {
      "KPI": "ERCS_VoLTE_Traffic_Erls",
      "Time Granularity": "24 Hrs",
      "Circle": "ASM",
      "2025-08-31 13:00": "11149.78",
      "2025-08-31 14:00": "9863.86",
      "2025-08-31 15:00": "3911.01",
      "2025-08-31 16:00": "",
      "Tech": "4G",
      "Vendor": "Ericsson",
      "workflow_id": "Kpi_runtime_results-1756641469500"
    },
    {
      "KPI": "ERCS_BSS_Total_Traffic_Erlangs",
      "Time Granularity": "24 Hrs",
      "Circle": "ASM",
      "2025-08-31 13:00": "7693.56",
      "2025-08-31 14:00": "7251.59",
      "2025-08-31 15:00": "7188.18",
      "2025-08-31 16:00": "6908.94",
      "Tech": "2G",
      "Vendor": "Ericsson",
      "workflow_id": "Kpi_runtime_results-1756641469500"
    },
    {
      "KPI": "ERIC_5G_DL MAC Data Volume_GB",
      "Time Granularity": "24 Hrs",
      "Circle": "ASM",
      "2025-08-31 13:00": "",
      "2025-08-31 14:00": "",
      "2025-08-31 15:00": "",
      "2025-08-31 16:00": "",
      "Tech": "5G",
      "Vendor": "Ericsson",
      "workflow_id": "Kpi_runtime_results-1756641469500"
    },
    {
      "KPI": "Ericsson_Total_Data_Payload_TB",
      "Time Granularity": "24 Hrs",
      "Circle": "ASM",
      "2025-08-31 13:00": "27.94",
      "2025-08-31 14:00": "28.26",
      "2025-08-31 15:00": "11.52",
      "2025-08-31 16:00": "",
      "Tech": "4G",
      "Vendor": "Ericsson",
      "workflow_id": "Kpi_runtime_results-1756641469500"
    },
    {
      "KPI": "ERCS_BSS_Total_Payload_GB",
      "Time Granularity": "24 Hrs",
      "Circle": "ASM",
      "2025-08-31 13:00": "127.52",
      "2025-08-31 14:00": "129.52",
      "2025-08-31 15:00": "117.14",
      "2025-08-31 16:00": "71.67",
      "Tech": "2G",
      "Vendor": "Ericsson",
      "workflow_id": "Kpi_runtime_results-1756641469500"
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