import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import InputSelect from '../../components/InputSelect';
import CustomButton from '../../components/CustomButton';
import FlagCarousel from '../../components/FlagCarousel';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';

function Home() {
  
  const [filtro, setFiltro] = useState('')
  const [filtro2, setFiltro2] = useState('')
  const [responseAPI, setResponseAPI] = useState('')
  const [regioes,] = useState([
    {
      option: "Europa",
      value: "Europe"
    },
    {
      option: "Américas",
      value: "Americas"
    },
    {
      option: "Ásia",
      value: "Asia"
    },
    {
      option: "África",
      value: "Africa"
    },
    {
      option: "Oceania",
      value: "Oceania"
    },
  ])
  
  const [capitais, setCapitais] = useState([])
  const [linguas, setLinguas] = useState([])
  const [paises, setPaises] = useState([])
  const [codsligacao, setCodsLigacao] = useState([])

  useEffect(() => {
    
    setFiltro2('')
    
    api.get("all")
    .then(response => {
      setResponseAPI(response.data)
      const _capitais = []
      const _linguas = []
      const _paises = []
      const _codsligacao = []
      response.data.map(data => {
      
        _capitais.push({
          option: data.capital,
          value: data.capital
        })

        data.languages.map(lang => {
          const linguaExistente =  _linguas.find(ling => ling.value === lang.iso639_1);
          if (!linguaExistente) _linguas.push({option: lang.name, value: lang.iso639_1})
       })

       _paises.push({
         option: data.name,
         value: data.name
       })


       data.callingCodes.map(code => {
        const codeInteger = parseInt(code)
        const codeExistente =  _codsligacao.find(codelig => codelig === codeInteger);
        if (!codeExistente && !isNaN(codeInteger)) _codsligacao.push({option: codeInteger, value: codeInteger})
     })

      })
      setCapitais(_capitais)
      setLinguas(_linguas)
      setPaises(_paises)
      setCodsLigacao(_codsligacao.sort((a, b) => a - b))
    })
  },[])

  useEffect(() => {
    setFiltro2('')
  },[filtro])
  
  const options = [
  {option: "Região", value: "regiao"},
  {option: "Capital", value: "capital"},
  {option: "Língua", value: "lingua"},
  {option: "País", value: "pais"},
  {option: "Código de ligação", value: "codligacao"}
  ]
  
  let options2 = []
  if (filtro === "regiao") options2 = regioes
  if (filtro === "capital") options2 = capitais
  if (filtro === "lingua") options2 = linguas
  if (filtro === "pais") options2 = paises
  if (filtro === "codligacao") options2 = codsligacao

  return(
      <Container>
          <div className="conteudo">
            
            <div className="container-pesquisa">
                <div className="container-inputs">
                
                  <InputSelect label="Filtrar por" value="filtros" options={options} 
                  value={filtro}
                  onChange={setFiltro}
                  />
                  { filtro !== '' &&
                  <InputSelect label={options.find(option => option.value === filtro)?.option}
                  options={options2}
                  value={filtro2} 
                  onChange={setFiltro2}
                  />
                  }
                </div>
                {filtro2 !== '' &&
                <Link to={{
                  pathname: '/details',
                  state: { filtro, filtro2, responseAPI }
                }} className="link">
                  <CustomButton />
                </Link>
                }
            </div>
          <FlagCarousel state={filtro, filtro2} />
          </div>
      </Container>
  );
}

export default Home;