import React, { useState } from 'react'
import './MainArea.css';
import 'animate.css';

 
function MainArea() {

    

    const LOGOTEXT = "<Hello World/>";

    const [color, setColor] = useState(false);

    const changeColor = () => {
        if(window.scrollY >= 1){
            setColor(true);
        }else {
            setColor(false);
        }
    }
    
    window.addEventListener("scroll", changeColor);

    

  return (
    <div className= "MainArea">
        <div className= "MainAreaBackgropund">

        <svg version="1.1" id="home-anim" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >

<g id="home">
	<defs>
		<rect id="masque" y="0.4" width="2000" height="1300px"/>
	</defs>
	<clipPath id="cache">
		<use xlinkHref="#masque"/>
	</clipPath>
	<g id="light-blue">
		<line x1="630.8" y1="894.3" x2="476.3" y2="1048.8"/>
		<line x1="858.2" y1="823.9" x2="1012.7" y2="669.4"/>
		<line x1="1066.9" y1="458.2" x2="912.4" y2="612.7"/>
		<line x1="1294.3" y1="387.8" x2="1448.8" y2="233.3"/>
		<line x1="1503" y1="22.1" x2="1348.5" y2="176.6"/>
		<line x1="895.6" y1="1166.6" x2="1050.1" y2="1012.1"/>
		<line x1="1104.3" y1="800.9" x2="949.8" y2="955.4"/>
		<line x1="1331.7" y1="730.5" x2="1486.2" y2="576"/>
		<line x1="1540.4" y1="364.8" x2="1385.9" y2="519.3"/>
		<line x1="1767.8" y1="294.4" x2="1922.3" y2="139.9"/>
		<line x1="1976.5" y1="-71.3" x2="1822" y2="83.2"/>
		<line x1="1369.1" y1="1073.2" x2="1523.6" y2="918.7"/>
		<line x1="1577.8" y1="707.5" x2="1423.3" y2="862"/>
		<line x1="1805.2" y1="637.1" x2="1959.7" y2="482.6"/>
		<line x1="1624" y1="1041.4" x2="1469.4" y2="1195.9"/>
		<line x1="-134.7" y1="674.9" x2="19.8" y2="520.4"/>
		<line x1="74" y1="309.2" x2="-80.5" y2="463.7"/>
		<line x1="301.4" y1="238.8" x2="455.9" y2="84.3"/>
		<line x1="510.1" y1="-126.9" x2="355.6" y2="27.6"/>
		<line x1="-88.6" y1="1008.9" x2="65.9" y2="854.4"/>
		<line x1="120.1" y1="643.1" x2="-34.4" y2="797.7"/>
		<line x1="347.5" y1="572.8" x2="502" y2="418.3"/>
		<line x1="556.2" y1="207.1" x2="401.7" y2="361.6"/>
		<line x1="783.6" y1="136.7" x2="938.1" y2="-17.8"/>
		<line x1="157.6" y1="985.8" x2="3" y2="1140.3"/>
		<line x1="384.9" y1="915.5" x2="539.4" y2="760.9"/>
		<line x1="593.6" y1="549.7" x2="439.1" y2="704.3"/>
		<line x1="821" y1="479.4" x2="975.5" y2="324.9"/>
		<line x1="1029.7" y1="113.6" x2="875.2" y2="268.2"/>
		<line x1="1257.1" y1="43.3" x2="1411.6" y2="-111.2"/>
	</g>
	<g id="red">
		<line x1="794.4" y1="883.4" x2="639.8" y2="1037.9"/>
		<line x1="694.6" y1="834.8" x2="849.2" y2="680.3"/>
		<line x1="1230.4" y1="447.3" x2="1075.9" y2="601.8"/>
		<line x1="1130.7" y1="398.7" x2="1285.2" y2="244.2"/>
		<line x1="1666.5" y1="11.2" x2="1512" y2="165.7"/>
		<line x1="732" y1="1177.5" x2="886.6" y2="1023"/>
		<line x1="1267.9" y1="790" x2="1113.3" y2="944.5"/>
		<line x1="1168.1" y1="741.4" x2="1322.7" y2="586.9"/>
		<line x1="1703.9" y1="353.9" x2="1549.4" y2="508.4"/>
		<line x1="1604.2" y1="305.3" x2="1758.7" y2="150.8"/>
		<line x1="1205.5" y1="1084.1" x2="1360.1" y2="929.6"/>
		<line x1="1741.4" y1="696.5" x2="1586.8" y2="851.1"/>
		<line x1="1641.6" y1="648" x2="1796.2" y2="493.5"/>
		<line x1="1787.5" y1="1030.5" x2="1633" y2="1185"/>
		<line x1="1687.8" y1="981.9" x2="1842.3" y2="827.4"/>
		<line x1="200.1" y1="-44.4" x2="45.6" y2="110.1"/>
		<line x1="237.5" y1="298.3" x2="83" y2="452.8"/>
		<line x1="137.8" y1="249.7" x2="292.3" y2="95.2"/>
		<line x1="673.6" y1="-137.8" x2="519.1" y2="16.7"/>
		<line x1="283.7" y1="632.2" x2="129.2" y2="786.8"/>
		<line x1="184" y1="583.7" x2="338.5" y2="429.2"/>
		<line x1="719.8" y1="196.2" x2="565.2" y2="350.7"/>
		<line x1="620" y1="147.6" x2="774.6" y2="-6.9"/>
		<line x1="321.1" y1="974.9" x2="166.6" y2="1129.4"/>
		<line x1="221.4" y1="926.4" x2="375.9" y2="771.8"/>
		<line x1="757.2" y1="538.8" x2="602.7" y2="693.4"/>
		<line x1="657.5" y1="490.3" x2="812" y2="335.8"/>
		<line x1="1193.3" y1="102.7" x2="1038.7" y2="257.3"/>
		<line x1="1093.5" y1="54.2" x2="1248.1" y2="-100.3"/>
	</g>
	<g id="blue">
		<line x1="225.8" y1="1151" x2="534.9" y2="841.9"/>
		<line x1="827.1" y1="1003.3" x2="518" y2="1312.3"/>
		<line x1="661.9" y1="714.9" x2="971" y2="405.9"/>
		<line x1="1263.1" y1="567.2" x2="954.1" y2="876.3"/>
		<line x1="1098" y1="278.8" x2="1407.1" y2="-30.2"/>
		<line x1="1699.2" y1="131.1" x2="1390.2" y2="440.2"/>
		<line x1="699.3" y1="1057.6" x2="1008.4" y2="748.5"/>
		<line x1="1300.6" y1="909.9" x2="991.5" y2="1218.9"/>
		<line x1="1135.4" y1="621.5" x2="1444.5" y2="312.4"/>
		<line x1="1736.6" y1="473.8" x2="1427.6" y2="782.8"/>
		<line x1="1571.5" y1="185.4" x2="1880.6" y2="-123.6"/>
		<line x1="1172.8" y1="964.2" x2="1481.9" y2="655.1"/>
		<line x1="1774.1" y1="816.5" x2="1465" y2="1125.5"/>
		<line x1="1608.9" y1="528.1" x2="1918" y2="219"/>
		<line x1="1219" y1="1298.1" x2="1528" y2="989.1"/>
		<line x1="1655.1" y1="862" x2="1964.1" y2="553"/>
		<line x1="232.8" y1="75.5" x2="-76.2" y2="384.6"/>
		<line x1="270.2" y1="418.2" x2="-38.8" y2="727.3"/>
		<line x1="105.1" y1="129.8" x2="414.2" y2="-179.2"/>
		<line x1="706.3" y1="-17.9" x2="397.3" y2="291.2"/>
		<line x1="-284.8" y1="899.9" x2="24.2" y2="590.8"/>
		<line x1="316.4" y1="752.2" x2="7.3" y2="1061.2"/>
		<line x1="151.3" y1="463.8" x2="460.3" y2="154.7"/>
		<line x1="752.5" y1="316.1" x2="443.4" y2="625.1"/>
		<line x1="587.3" y1="27.7" x2="896.4" y2="-281.4"/>
		<line x1="1188.6" y1="-120" x2="879.5" y2="189"/>
		<line x1="-247.4" y1="1242.5" x2="61.6" y2="933.5"/>
		<line x1="188.7" y1="806.4" x2="497.7" y2="497.4"/>
		<line x1="789.9" y1="658.8" x2="480.8" y2="967.8"/>
		<line x1="624.8" y1="370.4" x2="933.8" y2="61.3"/>
		<line x1="1226" y1="222.7" x2="916.9" y2="531.7"/>
		<line x1="1662.1" y1="-213.4" x2="1353" y2="95.6"/>
	</g>
</g>
</svg>

        </div>


        <div className= "tint"></div>


            <div className={color ? 'Navbar header-bg' : 'Navbar'}>
                <p className='Logo'>{LOGOTEXT}</p>

                <button onClick={() => {
					window.open("assets/Joseph Batchelor.pdf", "_blank");
					}} className='btnResume'>
					<div>Resume</div>
				</button>
            </div>


           <div className="Fullname animate__animated animate__backInDown"><p>JOSEPH BATCHELOR</p></div>
           <div className="Profession animate__animated animate__backInDown"><p>FULL STACK DEVELOPER</p></div>
                            
            <div className='undertext animate__animated animate__backInDown'>
            Expertise in design, installation, testing and maintenance of software systems.
            </div>

            <div className='blueContainer '>
            <a className='btnGit animate__animated animate__backInLeft' href="https://github.com/JosephBatchelor" target="_blank"><svg className='svgGit' width="35" height="35" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 1.5C6.202 1.5 1.5 6.323 1.5 12.267c0 4.758 3.01 8.79 7.181 10.214a.82.82 0 0 0 .178.019c.39 0 .54-.286.54-.534 0-.258-.01-.933-.015-1.833a4.802 4.802 0 0 1-1.059.126c-2.02 0-2.48-1.57-2.48-1.57-.478-1.242-1.167-1.575-1.167-1.575-.914-.642-.005-.66.066-.66h.004c1.055.093 1.608 1.115 1.608 1.115.525.919 1.228 1.176 1.857 1.176a2.953 2.953 0 0 0 1.2-.28c.093-.695.365-1.168.665-1.44-2.33-.272-4.781-1.195-4.781-5.32 0-1.177.408-2.138 1.078-2.888-.108-.272-.469-1.369.103-2.85a.874.874 0 0 1 .235-.023c.38 0 1.237.145 2.653 1.13a9.76 9.76 0 0 1 5.259 0c1.416-.985 2.273-1.13 2.653-1.13a.873.873 0 0 1 .235.023c.571 1.481.21 2.578.103 2.85.67.755 1.078 1.716 1.078 2.888 0 4.134-2.456 5.043-4.796 5.31.375.333.713.99.713 1.993 0 1.439-.014 2.601-.014 2.953 0 .253.145.539.534.539a.9.9 0 0 0 .188-.019c4.176-1.425 7.181-5.46 7.181-10.214C22.5 6.323 17.798 1.5 12 1.5Z"></path>
</svg><p>Github</p></a>

            <a className='btnlkn animate__animated animate__backInRight' href="https://linkedin.com/in/joseph-batchelor" target="_blank"><svg className='svgLkn' width="35" height="35" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.82 1.5H3.294c-.957 0-1.794.69-1.794 1.635v17.566c0 .951.837 1.799 1.794 1.799h17.521c.963 0 1.685-.854 1.685-1.8V3.136c.006-.946-.722-1.635-1.68-1.635ZM8.01 19.005H5V9.65h3.01v9.354ZM6.61 8.228h-.022c-.963 0-1.586-.716-1.586-1.613C5.002 5.7 5.642 5 6.626 5c.984 0 1.587.695 1.608 1.614 0 .897-.624 1.613-1.625 1.613Zm12.395 10.777h-3.009V13.89c0-1.225-.438-2.063-1.526-2.063-.832 0-1.324.563-1.543 1.111-.082.197-.104.465-.104.739v5.328H9.815V9.65h3.008v1.301c.438-.623 1.122-1.52 2.713-1.52 1.975 0 3.469 1.301 3.469 4.108v5.465Z"></path>
</svg><p>linkedin</p></a>
            </div>
            
          
      </div>
  )
}

export default  MainArea;