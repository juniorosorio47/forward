import { useCallback, useMemo, useRef, useState } from "react";
import Head from "next/head";
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web'; 

import { FaAngleDoubleRight, FaClock, FaRetweet } from 'react-icons/fa'
import { FcCalendar } from 'react-icons/fc'

import { Container, Insert, Result, Content, Divider, Field, Section, ConvertButton } from '../../styles/convert/styles';
import Input from '../../components/Input'; 
import { format } from "date-fns-tz";

interface ITimestampsInput{
  type?:string;
  value?:number;
  toGmt?:string;
  toTimezone?:string;
  relative?:string;
}

interface IDateInput{
  day?:number;
  month?:number;
  year?:number;
  hour?:number;
  minute?:number;
  second?:number;
  timestamp?:number;
  timestamp_miliseconds?:number;
  toGmt?:string;
  toTimezone?:string;
}

const Timestamps: React.FC = () => {
  const dateNow = useMemo(() => new Date(Date.now()), []);
  const [errorTimestamp, setErrorTimestamp] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [error, setError] = useState(false);
  const [showResultTimestamp, setShowResultTimestamp] = useState(false);
  const [showResultDate, setShowResultDate] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const [timestampToDate, setTimestampToDate] = useState<ITimestampsInput>({
    value:dateNow.getTime(),
  })

  const [dateToTimestamps, setDateToTimestamps] = useState<IDateInput>({
    day: dateNow.getDate(),
    month: dateNow.getMonth()+1,
    year: dateNow.getFullYear(),
    hour: dateNow.getHours() % 12 || 12,
    minute: dateNow.getMinutes(),
    second: dateNow.getSeconds(),
    timestamp: Math.round(dateNow.getTime()/1000),
    timestamp_miliseconds: dateNow.getTime(),
  })

  const timestampHandleSubmit = useCallback((data) => {
    setErrorTimestamp(false)

    try{
      let { timestamp } = data;
      const formatter = new Intl.RelativeTimeFormat();

      if(timestamp===""){
        throw new Error(`Invalid date: ${timestamp}`)
      }

      let type = '';

      if(timestamp.length<12 && timestamp.length>0){
        type = 'seconds';
        timestamp = Number(timestamp*1000)
      };

      if(timestamp.length>=12 && timestamp.length<15) type = 'miliseconds';

      if(timestamp.length>15) {
        type = 'microseconds';
        timestamp = Number(timestamp/1000);
      };

      const toTimezone = new Date(Number(timestamp));
      const toGmt = toTimezone.toUTCString();
      const deltaDays = (toTimezone.getTime() - Date.now()) / (1000 * 3600 * 24);

      let relative = '';

      if(deltaDays>-365 && deltaDays<365){
        relative = formatter.format(Math.round(deltaDays), 'days')

      } else{
        relative = formatter.format(Math.round(deltaDays/365), 'years')
      }

      setTimestampToDate({
        value:timestamp,
        type,
        toGmt,
        toTimezone:format(toTimezone, 'PPPPpppp'),
        relative
      })

      setShowResultTimestamp(true);

    }catch(error){
      setErrorTimestamp(true)
      setShowResultTimestamp(true);
      console.log(error);
    }

  },[timestampToDate])

  const dateHandleSubmit = useCallback((data) => {
    setErrorDate(false)
    try{
      const { year, day, hour, minute, second } = data;
      
      let { month } = data;
      month = month-1;

      const date = new Date(year, month, day, hour, minute, second)

      setDateToTimestamps({
        year, 
        month, 
        day, 
        hour, 
        minute, 
        second,
        timestamp: Math.round(date.getTime()/1000),
        timestamp_miliseconds:date.getTime(),
        toGmt:date.toUTCString(),
        toTimezone:format(date, 'PPPPpppp'),

      })
      
      setShowResultDate(true)

    }catch(error){
      setErrorDate(true)
      setShowResultDate(true);
      console.log(error);

    }
  },[dateToTimestamps])

  return <>
    <Head>
      <title>Timestamps</title>
    </Head>
    <Container>
      <h1>Convert Epoch Timestamp</h1>
      <Section>
        <h2><FaClock/> Timestamp to human-friendly date:</h2>
        <Content>
          <Insert>
            <Form id={'timestamps-form'} onSubmit={timestampHandleSubmit} ref={formRef} initialData={ {timestamp: timestampToDate.value} }>
              <Field>
                <p>Unix Timestamp</p>
                <Input 
                  type="text" 
                  name="timestamp" 
                  placeholder="Unix Timestamp"
                  onKeyPress={(event) => {
                    if (!/^([0-9])$/.test(event.key)) {
                      event.preventDefault();
                    }
                  }} 
                />
              </Field>
              <ConvertButton type="submit">
                <FaRetweet/>
              </ConvertButton>
            </Form>
          </Insert>
          {showResultTimestamp && <>
              <FaAngleDoubleRight/>
            <Result>
              {error ? <p>ERROR: Invalid Timestamp</p> : <>
                <p>Assuming that this timestamp is in <span>{timestampToDate.type}:</span></p>
                <p><span>GMT:</span> {timestampToDate.toGmt} </p>
                <p><span>Your time zone:</span> {timestampToDate.toTimezone}</p>
                <p><span>Relative:</span> {timestampToDate.relative}</p>
              </>}
            </Result>
          </>}
        </Content>

      </Section>
      <Divider/>
      <Section>
        <h2> <FcCalendar/> Human-friendly date and time (24h) to timestamps:</h2>
        <Content>
          <Insert>
            <Form 
              id={'date-form'}
              onSubmit={dateHandleSubmit} 
              ref={formRef} 
              initialData={{
                year:dateToTimestamps.year,
                month:dateToTimestamps.month,
                day:dateToTimestamps.day,
                hour:dateToTimestamps.hour,
                minute:dateToTimestamps.minute,
                second:dateToTimestamps.second,
              }}
            >
              <Field id="year">
                <p>Year</p>
                <Input 
                  type="text" 
                  name="year" 
                  placeholder="Year" 
                  max="4"
                  onKeyPress={(event) => {
                    if (!/^([0-9])$/.test(event.key)) {
                      console.log();
                      event.preventDefault();
                    }
                  }} 
                />
              </Field>

              <Field>
                <p>Mon</p>
                <Input 
                  type="text" 
                  name="month" 
                  placeholder="Month" 
                  onKeyPress={(event) => {
                    if (!/^([0-9])$/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </Field>
              <Field>
                <p>Day</p>
                <Input 
                  type="text" 
                  name="day" 
                  placeholder="Day" 
                  onKeyPress={(event) => {
                    if (!/^([0-9])$/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </Field>
              <Field>
                <p>Hr</p>
                <Input 
                  type="text" 
                  name="hour" 
                  placeholder="Hours" 
                  onKeyPress={(event) => {
                    if (!/^([0-9])$/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </Field>
              <Field>
                <p>Min</p>
                <Input 
                  type="text"  
                  name="minute" 
                  placeholder="Minutes" 
                  onKeyPress={(event) => {
                    if (!/^([0-9])$/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </Field>
              <Field>
                <p>Sec</p>
                <Input 
                  type="text" 
                  name="second" 
                  placeholder="Seconds" 
                  onKeyPress={(event) => {
                    if (!/^([0-9])$/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </Field>
              
              <ConvertButton type="submit"><FaRetweet/></ConvertButton>
            </Form>
          </Insert>
          {showResultDate && <>
              <FaAngleDoubleRight/>
            <Result>
              {error ? <p>ERROR: Invalid Timestamp</p> : <>
                <p><span>Epoch timestamp:</span> {dateToTimestamps.timestamp}</p>
                <p><span>Timestamp in milliseconds:</span> {dateToTimestamps.timestamp_miliseconds} </p>
                <p><span>Date and time (GMT):</span> {dateToTimestamps.toGmt}</p>
                <p><span>Date and time (your time zone):</span> {dateToTimestamps.toTimezone}</p>
              </>}
            </Result>
          </>}
        </Content>

      </Section>

    </Container>
  </>;
}

export default Timestamps;