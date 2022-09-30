import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';
const NewQuotes = () => {
  const navigate = useNavigate()

  const{sendRequest,status}= useHttp(addQuote)

  useEffect(()=>{
    if(status === 'completed'){
      navigate('/quotes')
    }
  },[status,navigate])

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData)
  };

  return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />;
};

export default NewQuotes;
