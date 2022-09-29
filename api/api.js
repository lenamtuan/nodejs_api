exports.inputdata = async function(req, res) {
    try {  
        res.json(
            {
                "inbound": [
                  {
                    "shipmentNo": 1,
                    "inbound_date": "2021-01-10T00:00:00.000Z",
                    "sku_id": "P91162940",
                    "quantity": 200
                  },
                  {
                    "shipmentNo": 2,
                    "inbound_date": "2021-01-11T00:00:00.000Z",
                    "sku_id": "P91162940",
                    "quantity": 1000
                  },
                  {
                    "shipmentNo": 3,
                    "inbound_date": "2021-01-11T00:00:00.000Z",
                    "sku_id": "P91162940",
                    "quantity": 500
                  }
                ],
                "inventory": [
                  {
                    "warehouse_id": "1         ",
                    "sku_id": "P91162940",
                    "closing_stock": 1000
                  },
                  {
                    "warehouse_id": "1         ",
                    "sku_id": "P91162116",
                    "closing_stock": 2000
                  },
                  {
                    "warehouse_id": "1         ",
                    "sku_id": "P91162118",
                    "closing_stock": 3000
                  }
                ],
                "outbound": [
                  {
                    "order_id": "SO210101-001",
                    "sku_id": "P91162116",
                    "quantity": 289
                  },
                  {
                    "order_id": "SO210101-002",
                    "sku_id": "P91162940",
                    "quantity": 390
                  },
                  {
                    "order_id": "SO210101-003",
                    "sku_id": "P91162940",
                    "quantity": 290
                  },
                  {
                    "order_id": "SO210102-001",
                    "sku_id": "P91162940",
                    "quantity": 450
                  },
                  {
                    "order_id": "SO210102-002",
                    "sku_id": "P91162940",
                    "quantity": 100
                  },
                  {
                    "order_id": "SO210102-003",
                    "sku_id": "P91162116",
                    "quantity": 300
                  }
                ]
              }
            );
    } catch (err) {  
        res.status(500)  
        res.send(err.message)  
    } 
};