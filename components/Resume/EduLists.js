import React from 'react'
import EduCard from './EduCard'
const Dummy  = [
    {
        id:'e1',
        title:'Hunga Boarding School',
        date:'2061-2061',
        description:'This is the First School. I have studied located in Gulmi District. Hunga, Chatrakot-3',
    },
    {
        id:'e2',
        title:'New Environment School',
        date:'2061-2062',
        description:'I have studied this school. This is the Public School. Located in Gulmi District. ThuloPokhara,Hunga, Chatrakot-3',
    },
    {
        id:'e3',
        title:'Moon Light School',
        date:'2063-2063',
        description:'I have studied this school. This is the Private Boarding School. Located in Gulmi District. Hardineta,Dharampani, Chatrakot-3.',
    },
    {
        id:'e4',
        title:'Ridersh Boarding School',
        date:'2064-2065',
        description:'I have studied this school. This is the Private Boarding School. Located in Tamghash. I have studied a year in this school being a hostler.I have Studied grade 1st here',
    },
    {
        id:'e5',
        title:'New Environment Higher Seconday School ',
        date:'2066-2067',
        description:'I have studied this school. This is first school I have studied in city. (Butwal). This is the Private Boarding School. Located in Manigram, Butwal.I have studied Grade 2.',
    },
    {
        id:'e6',
        title:'Smriti Boarding School',
        date:'2068-2070',
        description:'I have studied this school. This is Private Boarding school.Located in Butwal City, Janakinagar. I have studied grade 3 to 5 without changing another school',
    },
    {
        id:'e6',
        title:'Shree Shanti Namuna School',
        date:'2071-2075',
        description:'I have studied this school. This is Public .Located in Rupendehi, Butwal Manigram. I have studied till grade 10. I have gave see from this school and passed with higher grade',
    },
    {
        id:'e7',
        title:'Tilottma Campus',
        date:'2076-2078',
        description:'This is College level School. I have studied this school till 2078. I have passed 12th from this school . This School Located in Rupendehi, Tilottama, JogiKuti. I have studied +2 here',
    },
    {
        id:'e8',
        title:'Kalinga Institute Of Industrial Technology',
        date:'till 2025AD',
        description:'KIIT is Higher level School. I am pursuing this till 2025 ad. I have taken Engineering Course Btech Computer Science Engineering .This College Located in India, Odisha, Bhubaneshwor.',
    },

]



const EduLists = () => {

  return (
    <div>
        {Dummy.map(item => {
            return(
                <EduCard key={item.id} title={item.title} date={item.date} description={item.description}/>
            )
        })}
    </div>
  )
}

export default EduLists