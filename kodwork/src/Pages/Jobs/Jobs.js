import {useState, useEffect} from 'react'
import { Button, Text, View, FlatList } from 'react-native'
import JobSingleItem from '../../Components/JobSingleItem'

import useFetch from '../../Components/getData/useFetch'

function Jobs({navigation}) {

  const {data, loading, err} = useFetch("https://www.themuse.com/api/public/jobs?page=1");
  const [dataResolve, setDataResolve] = useState([])
  const [localData, setLocalData] = useState([
    {
        "contents": "<p><strong>Now's our time to inspire the future of healthcare together.</strong><br><br>Siemens Healthineers is a leading global medical technology company with over 170 years of experience and 18,000 patents. More than 48,000 dedicated colleagues in over 70 countries are driven to shape the future of healthcare. We stand with our customers around the world to support them in delivering high quality care to their patients. An estimated 5 million patients across the globe benefit every day from our innovative technologies and services in the areas of diagnostic and therapeutic imaging, laboratory diagnostics and molecular medicine, as well as digital health and enterprise services. This is what truly matters to us.<br><br>Join our team now at Siemens Healthineers as Nuclear Pharmacist<br><br>Please note that this is primarily a night shift role at the PETNET Solutions pharmacy; flexibility to work alternative shifts required.<br><br><strong>This is a role well suited to an ambitious professional, looking for the next step in their career. As a </strong><strong>Nuclear Pharmacist</strong><strong>, you will be responsible for</strong>:<br><br><ul><li>Production of radionuclides</li><li>Preparation and testing of radiopharmaceuticals.</li><li>Dispensing of radiopharmaceuticals.</li><li>Ensures compliance with all regulatory commitments including the cGMP, Radiation Safety, Pharmacy laws and corporate policies and procedures and other applicable Federal, State and Local authorities.</li><li>Responsible and accountable under State Pharmacy Law, for all actions of personnel working in the permitted pharmacy area, in the absence of the Pharmacy Manager (PIC).</li><li>Delivers and ensures performance of aseptic techniques, including sterility test and pyrogen testing per company standard operating procedures.</li><li>Ensures performance of QC procedures using analytical equipment and chemical tests per company standard operating procedures.</li><li>Maintains all applicable documents and records.</li><li>Prepares shipment of radioactive materials according to procedure and licensing authorities requirements.</li><li>Provides support in operation and maintenance of cyclotron, chemistry modules, QC equipment and associated software</li></ul><strong>This position may suit you best if you are familiar with </strong><strong>what is below, and would like to do develop your career with Healthineers</strong><ul><li>Nuclear Pharmacy</li><li>Chemistry</li><li>Quality Control</li></ul><br><strong>Required skills to have for the success of this role:</strong><br><br><ul><li>Pharmacy License</li><li>Bachelors Degree</li><li>Communicates effectively with a proven ability to interpret information and provide and/or follow complex instructions.</li><li>Ability to work independently and/or as part of a cross-functional team.</li><li>Strong customer relations skills.</li><li>Working knowledge of MS Windows applications. </li></ul><strong>Physical Demands: </strong><br><br><ul><li>Ability to handle 100 lb. packages</li></ul><strong>Supervisory Duties: </strong><br><br><ul><li>Leads multiple non-exempt</li></ul><br>At Siemens Healthineers, we value those who dedicate their energy and passion to a greater cause. Our people make us unique as an employer in the med-tech industry. What unites and motivates our global team is the inspiration of our common purpose:  To innovate for healthcare, building on our remarkable legacy of pioneering ideas that translate into even better healthcare products and services. We recognize that taking ownership of our work allows both us and the company to grow. We offer you a flexible and dynamic environment and the space to move beyond your comfort zone to grow both personally and professionally.<br><br><strong>If you want to join us in transforming the way healthcare is delivered, visit our career site at </strong>https://usa.healthcare.siemens.com/careers<strong>.</strong><br><br>If you wish to find out more about the specific before applying, please visit: https://usa.healthcare.siemens.com/about.<br><br>As an equal-opportunity employer we are happy to consider applications from individuals with disabilities.<br><br>#LI-AW1<br><br>PETNET<br><br><b>Organization:</b> Siemens Healthineers<br><br><b>Company:</b> Siemens Medical Solutions USA, Inc.<br><br><b>Experience Level:</b> Early Professional<br><br><b>Full / Part time:</b> Full-time<br><br><b>Equal Employment Opportunity Statement</b><br>Siemens is an Equal Opportunity and Affirmative Action Employer encouraging diversity in the workplace. All qualified applicants will receive consideration for employment without regard to their race, color, creed, religion, national origin, citizenship status, ancestry, sex, age, physical or mental disability unrelated to ability, marital status, family responsibilities, pregnancy, genetic information, sexual orientation, gender expression, gender identity, transgender, sex stereotyping, order of protection status, protected veteran or military status, or an unfavorable discharge from military service, and other categories protected by federal, state or local law.<br><br><b>EEO is the Law</b><br>Applicants and employees are protected under Federal law from discrimination. To learn more, Click here.<br><br><b>Pay Transparency Non-Discrimination Provision</b><br>Siemens follows Executive Order 11246, including the Pay Transparency Nondiscrimination Provision. To learn more, Click here.<br><br><b>California Privacy Notice</b><br>California residents have the right to receive additional notices about their personal information. To learn more, click here.</p>",
        "name": "Nuclear Pharmacist (Hackensack, NJ)",
        "type": "external",
        "publication_date": "2022-10-20T23:39:23Z",
        "short_name": "nuclear-pharmacist-hackensack-nj-716c0d",
        "model_type": "jobs",
        "id": 8594371,
        "locations": [
            {
                "name": "Hackensack, NJ"
            }
        ],
        "categories": [
            {
                "name": "Healthcare"
            }
        ],
        "levels": [
            {
                "name": "Mid Level",
                "short_name": "mid"
            }
        ],
        "tags": [],
        "refs": {
            "landing_page": "https://www.themuse.com/jobs/siemens/nuclear-pharmacist-hackensack-nj-716c0d"
        },
        "company": {
            "id": 11913,
            "short_name": "siemens",
            "name": "Siemens"
        }
    },
    {
        "contents": "<p>Gewinne einen spannenden Einblick in die Arbeitswelt!<br><br>Bereits während deiner Schul- und Studienzeit kannst du durch ein Ferial- oder Pflichtpraktikum wertvolle Praxiserfahrung sammeln und Einblicke in ein weltweit führendes Technologieunternehmen gewinnen.<br><br>Siemens bietet auf vielen verschiedenen Geschäftsgebieten sowohl technische als auch kaufmännische Herausforderungen. Durch ein Praktikum nutzt du deine persönliche Chance neue Arbeitswelten kennenzulernen, dir ein erstes berufliches Netzwerk aufzubauen und Türen für deine Karriere zu öffnen.<br><br>Aus diesem Grund wenden wir uns besonders an motivierte Schüler<em>innen und Student</em>innen, welche<br><br><ul><li>Interesse haben, einen internationalen Konzern kennenzulernen.</li><li>jeden Tag etwas Neues lernen und das Beste geben wollen.</li><li>Deutsch und Englisch in Wort und Schrift beherrschen.</li><li>theoretisches Wissen aus den folgenden Ausbildungsschwerpunkten/Studiengängen mitbringen:</li><ul><li>HTL: vor allem Maschinenbau, Elektronik und technische Informatik, Elektrotechnik, Informationstechnologie, Mechatronik, Wirtschaftsingenieurwesen</li><li>HAK</li><li>Technische Universität / FH: vor allem Maschinenbau, Elektrotechnik, Informatik, technische Informatik, Physik/Mathematik, Produktionstechnik &amp; Organisation,  Software &amp; Information Engineering, Wirtschaftsingenieurwesen</li><li>Kaufmännische Universität / FH: vor allem Controlling, BWL, Rechtswissenschaften, Wirtschaftsrecht</li></ul></ul><br>Gerade bei Praktikumsplätzen sind vollständige Bewerbungsunterlagen besonders wichtig. Wir ersuchen dich daher, deiner Onlinebewerbung deinen Lebenslauf und ein aussagekräftiges Motivationsschreiben hinzuzufügen. <br><br>Nach erfolgter Bewerbung melde dich bitte nochmals mit deinem Profil an und ergänze dein bereits erstelltes Profil um aktuelle Schulzeugnisse bzw. Studienerfolgsnachweise.<br><br>Vorgang zum Hochladen von weiteren Dokumenten: Login in das bereits erstellte Profil -&gt; Track my application -&gt; Mein Dashboard -&gt; Mein Konto -&gt; Hochgeladene Dokumente bearbeiten<br><br>Bitte beachte, dass wir nur vollständige Bewerbungen bzw. Profile bearbeiten können.<br><br>Wir freuen uns auf dich!<br><br><b>Organization:</b> People &amp; Organization<br><br><b>Company:</b> Siemens Aktiengesellschaft Oesterreich<br><br><b>Experience Level:</b> Student (Not Yet Graduated)<br><br><b>Full / Part time:</b> Full-time</p>",
        "name": "Ferial-/Pflichtpraktikum Siemens AG Österreich 2023",
        "type": "external",
        "publication_date": "2023-02-08T23:39:24Z",
        "short_name": "ferialpflichtpraktikum-siemens-ag-osterreich-2023-17225a",
        "model_type": "jobs",
        "id": 9966826,
        "locations": [
            {
                "name": "Innsbruck, Austria"
            }
        ],
        "categories": [
            {
                "name": "Science and Engineering"
            }
        ],
        "levels": [
            {
                "name": "Mid Level",
                "short_name": "mid"
            }
        ],
        "tags": [],
        "refs": {
            "landing_page": "https://www.themuse.com/jobs/siemens/ferialpflichtpraktikum-siemens-ag-osterreich-2023-17225a"
        },
        "company": {
            "id": 11913,
            "short_name": "siemens",
            "name": "Siemens"
        }
    },])

  const getDataHandle = () => {
    console.log(localData[0].name);
  }

  useState(() => {
    // title, company, location, level
    // let res = data.results;
    console.log("state girildi!")
    if (!loading){
      setDataResolve(data.results);
      console.log("state tamamlandı")
    }

  },[loading])

  const renderFlat = (item) => {
    // console.log(item);
    return (
      <View>
        <JobSingleItem data={item} />
      </View>
    )
  }

  if (loading){
    return (
      <View>
        <Text>Please Wait....</Text>
      </View>
    )
  }


  return (
    <View>
      <Button title='go To Job Details' onPress={() => {getDataHandle()}} />
      
      <FlatList contentContainerStyle={{ paddingBottom: 60 }}   data={data.results} renderItem={(item) => renderFlat(item)} />
      
    </View>
  )
}

export default Jobs