import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Plot from './Plot.jsx';

function App() {

  const rawData1 = [
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1673740800
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1674345600
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            1,
            0,
            0
        ],
        "total": 1,
        "week": 1674950400
    },
    {
        "days": [
            0,
            0,
            0,
            3,
            1,
            0,
            0
        ],
        "total": 4,
        "week": 1675555200
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1676160000
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1676764800
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            1,
            0,
            0
        ],
        "total": 1,
        "week": 1677369600
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            1,
            0
        ],
        "total": 1,
        "week": 1677974400
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            2,
            3,
            0
        ],
        "total": 5,
        "week": 1678579200
    },
    {
        "days": [
            0,
            1,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 1,
        "week": 1679184000
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1679788800
    },
    {
        "days": [
            0,
            6,
            0,
            1,
            1,
            0,
            0
        ],
        "total": 8,
        "week": 1680393600
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1680998400
    },
    {
        "days": [
            0,
            0,
            0,
            1,
            0,
            0,
            0
        ],
        "total": 1,
        "week": 1681603200
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1682208000
    },
    {
        "days": [
            0,
            0,
            0,
            1,
            2,
            2,
            0
        ],
        "total": 5,
        "week": 1682812800
    },
    {
        "days": [
            0,
            0,
            4,
            0,
            0,
            0,
            0
        ],
        "total": 4,
        "week": 1683417600
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            3,
            0
        ],
        "total": 3,
        "week": 1684022400
    },
    {
        "days": [
            0,
            1,
            3,
            1,
            0,
            0,
            0
        ],
        "total": 5,
        "week": 1684627200
    },
    {
        "days": [
            0,
            0,
            1,
            0,
            0,
            0,
            0
        ],
        "total": 1,
        "week": 1685232000
    },
    {
        "days": [
            0,
            1,
            3,
            0,
            0,
            1,
            0
        ],
        "total": 5,
        "week": 1685836800
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1686441600
    },
    {
        "days": [
            0,
            2,
            0,
            2,
            0,
            0,
            0
        ],
        "total": 4,
        "week": 1687046400
    },
    {
        "days": [
            0,
            2,
            0,
            0,
            2,
            1,
            0
        ],
        "total": 5,
        "week": 1687651200
    },
    {
        "days": [
            0,
            2,
            1,
            1,
            0,
            0,
            0
        ],
        "total": 4,
        "week": 1688256000
    },
    {
        "days": [
            0,
            0,
            2,
            0,
            3,
            0,
            0
        ],
        "total": 5,
        "week": 1688860800
    },
    {
        "days": [
            0,
            2,
            0,
            0,
            2,
            0,
            0
        ],
        "total": 4,
        "week": 1689465600
    },
    {
        "days": [
            0,
            1,
            4,
            1,
            1,
            1,
            0
        ],
        "total": 8,
        "week": 1690070400
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1690675200
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1691280000
    },
    {
        "days": [
            0,
            1,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 1,
        "week": 1691884800
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            1,
            0,
            0
        ],
        "total": 1,
        "week": 1692489600
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1693094400
    },
    {
        "days": [
            0,
            1,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 1,
        "week": 1693699200
    },
    {
        "days": [
            0,
            0,
            1,
            3,
            3,
            0,
            0
        ],
        "total": 7,
        "week": 1694304000
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1694908800
    },
    {
        "days": [
            0,
            1,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 1,
        "week": 1695513600
    },
    {
        "days": [
            0,
            0,
            1,
            0,
            2,
            1,
            0
        ],
        "total": 4,
        "week": 1696118400
    },
    {
        "days": [
            0,
            0,
            1,
            1,
            0,
            1,
            0
        ],
        "total": 3,
        "week": 1696723200
    },
    {
        "days": [
            0,
            0,
            0,
            2,
            0,
            3,
            0
        ],
        "total": 5,
        "week": 1697328000
    },
    {
        "days": [
            0,
            0,
            0,
            1,
            0,
            0,
            0
        ],
        "total": 1,
        "week": 1697932800
    },
    {
        "days": [
            0,
            3,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 3,
        "week": 1698537600
    },
    {
        "days": [
            1,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 1,
        "week": 1699142400
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1699747200
    },
    {
        "days": [
            0,
            0,
            1,
            0,
            0,
            0,
            0
        ],
        "total": 1,
        "week": 1700352000
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1700956800
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1701561600
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1702166400
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1702771200
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1703376000
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1703980800
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1704585600
    }
  ]; //for testing

  const rawData2 = [
  {
      "days": [
          0,
          0,
          0,
          5,
          0,
          0,
          0
      ],
      "total": 5,
      "week": 1673740800
  },
  {
      "days": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
      ],
      "total": 0,
      "week": 1674345600
  },
  {
      "days": [
          0,
          0,
          12,
          2,
          1,
          2,
          1
      ],
      "total": 18,
      "week": 1674950400
  },
  {
      "days": [
          0,
          0,
          5,
          3,
          3,
          0,
          1
      ],
      "total": 12,
      "week": 1675555200
  },
  {
      "days": [
          0,
          0,
          0,
          2,
          1,
          2,
          0
      ],
      "total": 5,
      "week": 1676160000
  },
  {
      "days": [
          5,
          4,
          0,
          0,
          0,
          0,
          0
      ],
      "total": 9,
      "week": 1676764800
  },
  {
      "days": [
          0,
          0,
          0,
          0,
          0,
          0,
          1
      ],
      "total": 1,
      "week": 1677369600
  },
  {
      "days": [
          0,
          1,
          0,
          0,
          0,
          1,
          0
      ],
      "total": 2,
      "week": 1677974400
  },
  {
      "days": [
          0,
          0,
          0,
          0,
          3,
          1,
          0
      ],
      "total": 4,
      "week": 1678579200
  },
  {
      "days": [
          0,
          4,
          5,
          1,
          0,
          0,
          0
      ],
      "total": 10,
      "week": 1679184000
  },
  {
      "days": [
          0,
          2,
          4,
          0,
          1,
          6,
          0
      ],
      "total": 13,
      "week": 1679788800
  },
  {
      "days": [
          0,
          0,
          0,
          0,
          0,
          4,
          0
      ],
      "total": 4,
      "week": 1680393600
  },
  {
      "days": [
          0,
          0,
          0,
          2,
          0,
          0,
          0
      ],
      "total": 2,
      "week": 1680998400
  },
  {
      "days": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
      ],
      "total": 0,
      "week": 1681603200
  },
  {
      "days": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
      ],
      "total": 0,
      "week": 1682208000
  },
  {
      "days": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
      ],
      "total": 0,
      "week": 1682812800
  },
  {
      "days": [
          0,
          0,
          0,
          0,
          1,
          0,
          0
      ],
      "total": 1,
      "week": 1683417600
  },
  {
      "days": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
      ],
      "total": 0,
      "week": 1684022400
  },
  {
      "days": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
      ],
      "total": 0,
      "week": 1684627200
  },
  {
      "days": [
          0,
          0,
          0,
          0,
          7,
          0,
          0
      ],
      "total": 7,
      "week": 1685232000
  },
  {
      "days": [
          0,
          8,
          0,
          0,
          0,
          0,
          0
      ],
      "total": 8,
      "week": 1685836800
  },
  {
      "days": [
          0,
          1,
          0,
          3,
          0,
          0,
          0
      ],
      "total": 4,
      "week": 1686441600
  },
  {
      "days": [
          0,
          0,
          0,
          2,
          1,
          2,
          0
      ],
      "total": 5,
      "week": 1687046400
  },
  {
      "days": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
      ],
      "total": 0,
      "week": 1687651200
  },
  {
      "days": [
          2,
          1,
          1,
          3,
          4,
          3,
          6
      ],
      "total": 20,
      "week": 1688256000
  },
  {
      "days": [
          2,
          5,
          6,
          2,
          2,
          0,
          0
      ],
      "total": 17,
      "week": 1688860800
  },
  {
      "days": [
          0,
          0,
          0,
          4,
          0,
          0,
          0
      ],
      "total": 4,
      "week": 1689465600
  },
  {
      "days": [
          0,
          0,
          1,
          0,
          0,
          1,
          0
      ],
      "total": 2,
      "week": 1690070400
  },
  {
      "days": [
          0,
          0,
          0,
          1,
          0,
          2,
          8
      ],
      "total": 11,
      "week": 1690675200
  },
  {
      "days": [
          0,
          0,
          2,
          0,
          0,
          0,
          1
      ],
      "total": 3,
      "week": 1691280000
  },
  {
      "days": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
      ],
      "total": 0,
      "week": 1691884800
  },
  {
      "days": [
          0,
          0,
          2,
          0,
          4,
          0,
          0
      ],
      "total": 6,
      "week": 1692489600
  },
  {
      "days": [
          0,
          0,
          0,
          0,
          2,
          4,
          0
      ],
      "total": 6,
      "week": 1693094400
  },
  {
      "days": [
          0,
          0,
          3,
          0,
          0,
          0,
          0
      ],
      "total": 3,
      "week": 1693699200
  },
  {
      "days": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
      ],
      "total": 0,
      "week": 1694304000
  },
  {
      "days": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
      ],
      "total": 0,
      "week": 1694908800
  },
  {
      "days": [
          0,
          0,
          0,
          0,
          2,
          0,
          0
      ],
      "total": 2,
      "week": 1695513600
  },
  {
      "days": [
          0,
          2,
          0,
          0,
          0,
          1,
          0
      ],
      "total": 3,
      "week": 1696118400
  },
  {
      "days": [
          0,
          0,
          1,
          5,
          1,
          0,
          0
      ],
      "total": 7,
      "week": 1696723200
  },
  {
      "days": [
          0,
          0,
          0,
          3,
          0,
          0,
          0
      ],
      "total": 3,
      "week": 1697328000
  },
  {
      "days": [
          0,
          0,
          0,
          11,
          2,
          1,
          0
      ],
      "total": 14,
      "week": 1697932800
  },
  {
      "days": [
          0,
          1,
          3,
          0,
          0,
          0,
          0
      ],
      "total": 4,
      "week": 1698537600
  },
  {
      "days": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
      ],
      "total": 1,
      "week": 1699142400
  },
  {
      "days": [
          0,
          0,
          1,
          2,
          0,
          0,
          0
      ],
      "total": 3,
      "week": 1699747200
  },
  {
      "days": [
          0,
          0,
          1,
          0,
          0,
          0,
          0
      ],
      "total": 1,
      "week": 1700352000
  },
  {
      "days": [
          0,
          0,
          2,
          6,
          0,
          0,
          1
      ],
      "total": 9,
      "week": 1700956800
  },
  {
      "days": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
      ],
      "total": 0,
      "week": 1701561600
  },
  {
      "days": [
          0,
          0,
          0,
          1,
          1,
          0,
          0
      ],
      "total": 2,
      "week": 1702166400
  },
  {
      "days": [
          0,
          0,
          0,
          0,
          0,
          0,
          1
      ],
      "total": 1,
      "week": 1702771200
  },
  {
      "days": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
      ],
      "total": 0,
      "week": 1703376000
  },
  {
      "days": [
          0,
          0,
          4,
          7,
          0,
          0,
          0
      ],
      "total": 11,
      "week": 1703980800
  },
  {
      "days": [
          0,
          0,
          0,
          0,
          0,
          0,
          0
      ],
      "total": 0,
      "week": 1704585600
  }
  ]; //for testing

  const rawData3 = [
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1673740800
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1674345600
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1674950400
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1675555200
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1676160000
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1676764800
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1677369600
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1677974400
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1678579200
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1679184000
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1679788800
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1680393600
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1680998400
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1681603200
    },
    {
        "days": [
            1,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 1,
        "week": 1682208000
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1682812800
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1683417600
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1684022400
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1684627200
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1685232000
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1685836800
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1686441600
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1687046400
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1687651200
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1688256000
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1688860800
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1689465600
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1690070400
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1690675200
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1691280000
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1691884800
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1692489600
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1693094400
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1693699200
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1694304000
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1694908800
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1695513600
    },
    {
        "days": [
            0,
            0,
            2,
            10,
            0,
            8,
            0
        ],
        "total": 20,
        "week": 1696118400
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1696723200
    },
    {
        "days": [
            1,
            2,
            15,
            3,
            11,
            1,
            0
        ],
        "total": 33,
        "week": 1697328000
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            14,
            22,
            12
        ],
        "total": 48,
        "week": 1697932800
    },
    {
        "days": [
            7,
            6,
            14,
            12,
            31,
            0,
            0
        ],
        "total": 70,
        "week": 1698537600
    },
    {
        "days": [
            0,
            0,
            0,
            16,
            18,
            5,
            0
        ],
        "total": 39,
        "week": 1699142400
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            2,
            4,
            4
        ],
        "total": 10,
        "week": 1699747200
    },
    {
        "days": [
            2,
            6,
            0,
            1,
            0,
            0,
            0
        ],
        "total": 9,
        "week": 1700352000
    },
    {
        "days": [
            0,
            0,
            14,
            2,
            0,
            0,
            0
        ],
        "total": 16,
        "week": 1700956800
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            4,
            0
        ],
        "total": 4,
        "week": 1701561600
    },
    {
        "days": [
            0,
            2,
            7,
            10,
            0,
            1,
            0
        ],
        "total": 20,
        "week": 1702166400
    },
    {
        "days": [
            0,
            0,
            5,
            0,
            0,
            0,
            0
        ],
        "total": 5,
        "week": 1702771200
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1703376000
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1703980800
    },
    {
        "days": [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "total": 0,
        "week": 1704585600
    }
];

  const rawRepoData = [{name: 'bluesky', data:rawData1}, {name:'tiled', data:rawData2}, {name: 'hklpy', data:rawData3}]; //for testing, create dynamically later

  const generateChartData = () => {
    var chartData = [];
    var repoNames = [];

    for (let j = 0; j < rawRepoData[0].data.length; j++) {      //cycle through each week
      var singleDataPoint = {week: j};                      //initialize each data point with the week integer
      for (let i = 0; i < rawRepoData.length; i++) {           //cycle through each repo
        singleDataPoint[rawRepoData[i].name] = rawRepoData[i].data[j].total;
      }
      chartData.push(singleDataPoint);                      //adds one week of data for all repos.
    }
    return chartData;
  }

  const sampleData = generateChartData();


  const [repos, setRepos] = useState([]);
  const [commits, setCommits] = useState([]);
  const [commitData, setCommitData] = useState(sampleData);

  const fetchCommits = async (repoName) => {
    try {
      const response = await fetch(`https://api.github.com/repos/bluesky/${repoName}/stats/commit_activity`, {
        headers: {
          "X-GitHub-Api-Version" : "2022-11-28"
        }
      });
      const data = await response.json();
      console.log(data);
      setCommits(data);
     } catch(error) {
      console.log('Error in fetchCommits: ' + error);
    }
  }
  const fetchRepos = async () => {
    //we know that the total number of repos is under 100, which is the limit for a single API call
    //for orgs with more than 100 repos, we could optionally make multiple API calls for each page of repos
    const response = await fetch("https://api.github.com/users/bluesky/repos?per_page=100", {
      headers: {
        "X-GitHub-Api-Version" : "2022-11-28"
      }
    });
    const data = await response.json();
    console.log(data);
    setRepos(data);
  }

  const RepositoryList = () => {
    //display the name for each repository
    return (
      <div>
        {repos.map((item) => <li onClick={()=> fetchCommits(item.name)}key={item.id}>{item.name}</li>)}
      </div>
    )
  }

  const CommitList = () => {
    return (
      <p>{JSON.stringify(commits)}</p>
    )
  }


  return (
    <div className="">
      <button onClick={()=> fetchCommits()}>Fetch Commits</button>
      <button onClick={()=> fetchRepos()}>Fetch Repos</button>
      <RepositoryList />
      <CommitList />
      <Plot data={sampleData} />
    </div>
  );
}

export default App;
