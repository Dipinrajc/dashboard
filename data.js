var oldData = {
  systems: [
    {
      id: "sfccs",
      name: "SFCC E-Commerce Platform - Staging",
      type: "cloud"
    },
    {
      id: "sfccl",
      name: "SFCC E-Commerce Platform - Live",
      type: "cloud"
    },
    { id: "ibm", name: "IBM Order Management", type: "cloud" },
    { id: "apim", name: "Akeneo PIM", type: "cloud" },
    { id: "sapcar", name: "SAP CAR", type: "onpremise" },
    { id: "sapisr", name: "SAP IS Retail", type: "onpremise" },
    { id: "bv", name: "Bazaar Voice", type: "external" },
    { id: "cyberpay", name: "Cyberesource/Paypal", type: "external" },
    {
      id: "emailsms",
      name: "Email/SMS Service Provider",
      type: "external"
    },
    { id: "car1car2", name: "Carrier1/Carrier2", type: "external" }
  ],
  systemlinks: [
    {
      id: "1",
      source: "sfccs",
      target: "sfccl",
      label: "Catalog, Price, Content (Propagation to Live)",
      type: "existing",
      status: "warning"
    },
    {
      id: "2",
      source: "sfccl",
      target: "bv",
      label: "Review and Rating Submission",
      type: "pointtopoint",
      status: "failure"
    },
    {
      id: "3",
      source: "bv",
      target: "sfccl",
      label: "Product Rating and Review",
      type: "pointtopoint",
      status: "active"
    },
    {
      id: "4",
      source: "sfccl",
      target: "cyberpay",
      label: "Product Rating and Review",
      type: "pointtopoint",
      status: "active"
    },
    {
      id: "5",
      source: "sfccl",
      target: "emailsms",
      label: "Customer Communication",
      type: "pointtopoint",
      status: "active"
    },
    {
      id: "6",
      source: "sfccl",
      target: "ibm",
      label: "Order List View",
      type: "realtime",
      status: "active"
    },
    {
      id: "7",
      source: "ibm",
      target: "sfccl",
      label: "Order re-pricing on amendent, INT_ECOM_011",
      type: "realtime",
      status: "active"
    },
    {
      id: "8",
      source: "sfccl",
      target: "ibm",
      label: "Order Submission, INT_ECOM_005",
      type: "batch",
      status: "active"
    },
    {
      id: "9",
      source: "ibm",
      target: "sfccl",
      label: "Inventory Feed, INT_INV_003",
      type: "batch",
      status: "active"
    },
    {
      id: "10",
      source: "cyberpay",
      target: "ibm",
      label: "Fraud Check Response",
      type: "pointtopoint",
      status: "active"
    },
    {
      id: "11",
      source: "ibm",
      target: "cyberpay",
      label: "Reauthorization and Settlement",
      type: "pointtopoint",
      status: "failure"
    },
    {
      id: "12",
      source: "ibm",
      target: "emailsms",
      label: "INT_ECOM_009, Customer Communication on Order status change",
      type: "pointtopoint",
      status: "active"
    },
    {
      id: "13",
      source: "ibm",
      target: "car1car2",
      label: "manifest posting, INT_CAR_008",
      type: "pointtopoint",
      status: "active"
    },
    {
      id: "14",
      source: "car1car2",
      target: "ibm",
      label: "Proof of delivery,  INT_CAR_009",
      type: "batch",
      status: "active"
    },
    {
      id: "15",
      source: "apim",
      target: "sfccs",
      label: "Image file transfer, INT_AST_001",
      type: "batch",
      status: "active"
    },
    {
      id: "16",
      source: "apim",
      target: "sfccs",
      label: "INT_CST_004, INT_CST_005, INT_CST_006",
      type: "batch",
      status: "active"
    },
    {
      id: "17",
      source: "apim",
      target: "ibm",
      label: "INT_CST_007, Enriched article masterfeed",
      type: "batch",
      status: "active"
    },
    {
      id: "18",
      source: "sapcar",
      target: "ibm",
      label: "Inventory delta feed, INT_INV_002",
      type: "nearrealtime",
      status: "active"
    },
    {
      id: "19",
      source: "sapcar",
      target: "ibm",
      label: "Inventory full feed, INT_INV_001",
      type: "batch",
      status: "active"
    },
    {
      id: "20",
      source: "sapisr",
      target: "sapcar",
      label: "Movements(DC/Store)",
      type: "existing",
      status: "active"
    },
    {
      id: "21",
      source: "sapisr",
      target: "apim",
      label: "INT_CAT_001,INT_CAT_002,INT_CAT_003",
      type: "batch",
      status: "active"
    },
    {
      id: "22",
      source: "sapisr",
      target: "sfccs",
      label: "INT_PRC_001, INT_PRC_002",
      type: "batch",
      status: "active"
    },
    {
      id: "23",
      source: "sapisr",
      target: "car1car2",
      label: "Manifest posting, label printing",
      type: "pointtopoint",
      status: "active"
    },
    {
      id: "24",
      source: "sapisr",
      target: "ibm",
      label: "Order packet update from warehouse",
      type: "realtime",
      status: "active"
    },
    {
      id: "25",
      source: "ibm",
      target: "sapisr",
      label: "Settlement status update, INT_CAR_007",
      type: "realtime",
      status: "active"
    },
    {
      id: "26",
      source: "ibm",
      target: "sapisr",
      label: "INT_FIN_001,INT_FIN_004, INT_FIN_003, INT_REP_001",
      type: "nearrealtime",
      status: "active"
    },
    {
      id: "27",
      source: "ibm",
      target: "sapisr",
      label: "INT_RTN_001,INT_RTN_003, INT_RTN_002",
      type: "nearrealtime",
      status: "active"
    },
    {
      id: "28",
      source: "ibm",
      target: "sapisr",
      label: "INT_ORC_001, INT_ORC_002, INT_ORC_004",
      type: "nearrealtime",
      status: "active"
    },
    {
      id: "29",
      source: "ibm",
      target: "sapisr",
      label: "INT_FUL_001,INT_FUL_008, INT_FUL_006, INT_FUL_005",
      type: "nearrealtime",
      status: "active"
    },
    {
      id: "30",
      source: "ibm",
      target: "sapisr",
      label: "NT_FUL_001,INT_FUL_008, INT_FUL_006, INT_FUL_005",
      type: "nearrealtime",
      status: "active"
    }
  ]
};
