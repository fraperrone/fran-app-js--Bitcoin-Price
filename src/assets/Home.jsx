/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Axios from 'axios'



function Home() {
  const [data, setData] = useState({
    time: {
      updated: '',
      updatedISO: '',
      updateduk: ''
    },
    disclaimer: "",
    chartName: "",
    bpi: {}
  })
  const [bpi, setBpi] = useState({

    EUR: {
      code: '',
      description: '',
      rate: '',
      rate_float: 0,
      symbol: ''
    },
    GBP: {
      code: '',
      description: '',
      rate: '',
      rate_float: 0,
      symbol: ''
    },
    USD: {
      code: '',
      description: '',
      rate: '',
      rate_float: 0,
      symbol: ''
    }

  })
  const [market, setMarket] = useState(
    {
      code: '',
      description: '',
      rate: '',
      rate_float: 0,
      symbol: ''
    }
  );

//probando commit


  useEffect(() => {

    const fetchData = async () => {
      try {
        await Axios({
          url: "https://api.coindesk.com/v1/bpi/currentprice.json"
        }).then(response => {

          setData(response.data)
          setBpi(response.data.bpi)
          setMarket(response.data.bpi.EUR)
        }).catch(error => {
          alert("Error API Rest, intente mas tarde - ", error)
        });

      }
      catch (error) {
        console.log(error)
      }
    }
    fetchData()



  }, [])




  const changeMarket = () => {
    try {
      if (market.code == "EUR") {
        setMarket(bpi.GBP)
      } else if (market.code == "GBP") {
        setMarket(bpi.USD)
      } else if (market.code == "USD") {
        setMarket(bpi.EUR)
      }

    } catch (e) {
      console.log(e);
    }
  }





  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRli613TiDL6hCdb2_Akb8ZAz2Wn8R-AaXi6aHzMGsxCGo_ywzCYM9hletq5hUhq5eORvw&usqp=CAU" style={{ borderRadius: '95px' }} />
      <Card.Body>
        <Card.Title>{market.description}</Card.Title>
        <Card.Text>
          {market.rate}
        </Card.Text>
        <Button variant="primary" onClick={changeMarket} >Change Coin</Button>
      </Card.Body>
      <Card.Footer>
        <Card.Text> {`API Disclaimer:    
        `}<br></br>
          {data.disclaimer}

        </Card.Text>
        <Card.Title>Actualizacion Time zone UK:<br></br>
          {data.time.updateduk}
        </Card.Title>
      </Card.Footer>
    </Card>
  );
}

export default Home;