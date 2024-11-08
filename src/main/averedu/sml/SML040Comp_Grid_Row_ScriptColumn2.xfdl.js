(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Grid_Row_ScriptColumn2");
            this.set_titletext("엑셀피벗-예제2");
            this.getSetter("classname").set("Script_String_Quote");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data0", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CITY\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"FLOAT\" size=\"256\"/><Column id=\"CITY_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1970</Col><Col id=\"VALUE\">98222.48</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1971</Col><Col id=\"VALUE\">98234.29</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1972</Col><Col id=\"VALUE\">98484.1</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1973</Col><Col id=\"VALUE\">98757.69</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1974</Col><Col id=\"VALUE\">98824.29</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1975</Col><Col id=\"VALUE\">98806.96</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1976</Col><Col id=\"VALUE\">98799.07</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1977</Col><Col id=\"VALUE\">98858.51</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1978</Col><Col id=\"VALUE\">98954.54</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1979</Col><Col id=\"VALUE\">98966.25</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1980</Col><Col id=\"VALUE\">98992.34</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1981</Col><Col id=\"VALUE\">99015.99</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1982</Col><Col id=\"VALUE\">99022.44</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1983</Col><Col id=\"VALUE\">99091.06</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1984</Col><Col id=\"VALUE\">99117.26</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1985</Col><Col id=\"VALUE\">99143.32</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1986</Col><Col id=\"VALUE\">99173.26</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1987</Col><Col id=\"VALUE\">99221.77</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1988</Col><Col id=\"VALUE\">99236.58</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1989 </Col><Col id=\"VALUE\">99262.63</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1990 </Col><Col id=\"VALUE\">99273.7</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1991 </Col><Col id=\"VALUE\">99299.8</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1992 </Col><Col id=\"VALUE\">99313.66</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1993 </Col><Col id=\"VALUE\">99391.82</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1994</Col><Col id=\"VALUE\">99393.81</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1995</Col><Col id=\"VALUE\">99268.38</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1996</Col><Col id=\"VALUE\">99313.46</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1997</Col><Col id=\"VALUE\">99373.04</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1998</Col><Col id=\"VALUE\">99407.9</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">1999</Col><Col id=\"VALUE\">99434.26</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">2000</Col><Col id=\"VALUE\">99460.74</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">2001</Col><Col id=\"VALUE\">99538</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">2002</Col><Col id=\"VALUE\">99585.2</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">2003</Col><Col id=\"VALUE\">99600.87</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">999</Col><Col id=\"YEAR\">2004</Col><Col id=\"VALUE\">99617.38</Col><Col id=\"CITY_NAME\">SEOUL</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1970</Col><Col id=\"VALUE\">609.81</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1971</Col><Col id=\"VALUE\">609.81</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1972</Col><Col id=\"VALUE\">613</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1973</Col><Col id=\"VALUE\">627.86</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1974</Col><Col id=\"VALUE\">628.01</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1975</Col><Col id=\"VALUE\">600.39</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1976</Col><Col id=\"VALUE\">607.97</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1977</Col><Col id=\"VALUE\">611.24</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1978</Col><Col id=\"VALUE\">607.15</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1979</Col><Col id=\"VALUE\">607.28</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1980</Col><Col id=\"VALUE\">607.27</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1981</Col><Col id=\"VALUE\">605.26</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1982</Col><Col id=\"VALUE\">605.33</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1983</Col><Col id=\"VALUE\">605.32</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1984</Col><Col id=\"VALUE\">605.38</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1985</Col><Col id=\"VALUE\">605.43</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1986</Col><Col id=\"VALUE\">605.42</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1987</Col><Col id=\"VALUE\">605.42</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1988</Col><Col id=\"VALUE\">605.4</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1989 </Col><Col id=\"VALUE\">605.43</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1990 </Col><Col id=\"VALUE\">605.34</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1991 </Col><Col id=\"VALUE\">605.33</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1992 </Col><Col id=\"VALUE\">605.36</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1993 </Col><Col id=\"VALUE\">605.4</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1994</Col><Col id=\"VALUE\">605.43</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1995</Col><Col id=\"VALUE\">605.78</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1996</Col><Col id=\"VALUE\">605.58</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1997</Col><Col id=\"VALUE\">605.52</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1998    </Col><Col id=\"VALUE\">605.52</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">1999    </Col><Col id=\"VALUE\">605.52</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">2000    </Col><Col id=\"VALUE\">605.5</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">2001    </Col><Col id=\"VALUE\">605.53</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">2002    </Col><Col id=\"VALUE\">605.52</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">2003    </Col><Col id=\"VALUE\">605.41</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">100</Col><Col id=\"YEAR\">2004    </Col><Col id=\"VALUE\">605.39</Col><Col id=\"CITY_NAME\">TOKYO</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">1980</Col><Col id=\"VALUE\">24</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">1981</Col><Col id=\"VALUE\">24.01</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">1982</Col><Col id=\"VALUE\">24.01</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">1983</Col><Col id=\"VALUE\">24.01</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">1984 </Col><Col id=\"VALUE\">24.01</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">1985 </Col><Col id=\"VALUE\">24.01</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">1986 </Col><Col id=\"VALUE\">24.01</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">1987 </Col><Col id=\"VALUE\">24.01</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">1988</Col><Col id=\"VALUE\">24.01</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">1989</Col><Col id=\"VALUE\">24.01</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">1990 </Col><Col id=\"VALUE\">24</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">1991</Col><Col id=\"VALUE\">24.01</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">1992</Col><Col id=\"VALUE\">24.01</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">1993  </Col><Col id=\"VALUE\">24.01</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">1994  </Col><Col id=\"VALUE\">23.92</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">1995 </Col><Col id=\"VALUE\">23.92</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">1996  </Col><Col id=\"VALUE\">23.92</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">1997 </Col><Col id=\"VALUE\">23.92</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">1998</Col><Col id=\"VALUE\">23.91</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">1999 </Col><Col id=\"VALUE\">23.91</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">2000</Col><Col id=\"VALUE\">23.91</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">2001</Col><Col id=\"VALUE\">23.91</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">2002 </Col><Col id=\"VALUE\">23.91</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">2003</Col><Col id=\"VALUE\">23.91</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">101</Col><Col id=\"YEAR\">2004</Col><Col id=\"VALUE\">23.91</Col><Col id=\"CITY_NAME\">PARIS</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1980</Col><Col id=\"VALUE\">10.04</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1981</Col><Col id=\"VALUE\">10</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1982 </Col><Col id=\"VALUE\">10</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1983</Col><Col id=\"VALUE\">10</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1984</Col><Col id=\"VALUE\">9.99</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1985</Col><Col id=\"VALUE\">9.99</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1986</Col><Col id=\"VALUE\">9.99</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1987</Col><Col id=\"VALUE\">9.99</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1988</Col><Col id=\"VALUE\">9.99</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1989</Col><Col id=\"VALUE\">9.99</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1990</Col><Col id=\"VALUE\">9.99</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1991</Col><Col id=\"VALUE\">9.99</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1992</Col><Col id=\"VALUE\">9.99</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1993</Col><Col id=\"VALUE\">9.99</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1994</Col><Col id=\"VALUE\">9.97</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1995</Col><Col id=\"VALUE\">9.97</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1996</Col><Col id=\"VALUE\">9.97</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1997</Col><Col id=\"VALUE\">9.97</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1998</Col><Col id=\"VALUE\">9.97</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1999</Col><Col id=\"VALUE\">9.96</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">2000</Col><Col id=\"VALUE\">9.96</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">2001</Col><Col id=\"VALUE\">9.96</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">2002</Col><Col id=\"VALUE\">9.96</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">2003</Col><Col id=\"VALUE\">9.96</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">2004</Col><Col id=\"VALUE\">9.96</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1970</Col><Col id=\"VALUE\">339.66</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1971</Col><Col id=\"VALUE\">340.09</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1972</Col><Col id=\"VALUE\">373.23</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1973</Col><Col id=\"VALUE\">375.09</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1974</Col><Col id=\"VALUE\">375.31</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1975</Col><Col id=\"VALUE\">376.13</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1976</Col><Col id=\"VALUE\">376.34</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1977</Col><Col id=\"VALUE\">346.68</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1978</Col><Col id=\"VALUE\">436.04</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1979</Col><Col id=\"VALUE\">432.32</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1980</Col><Col id=\"VALUE\">432.72</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1981</Col><Col id=\"VALUE\">432.87</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1982</Col><Col id=\"VALUE\">433.36</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1983</Col><Col id=\"VALUE\">434.13</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1984</Col><Col id=\"VALUE\">434.33</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1985</Col><Col id=\"VALUE\">434.52</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1986</Col><Col id=\"VALUE\">434.64</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1987</Col><Col id=\"VALUE\">435.13</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1988</Col><Col id=\"VALUE\">435.77</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1989 </Col><Col id=\"VALUE\">525.95</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1990 </Col><Col id=\"VALUE\">529.37</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1991 </Col><Col id=\"VALUE\">529.49</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1992 </Col><Col id=\"VALUE\">528.88</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1993 </Col><Col id=\"VALUE\">531.06</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1994</Col><Col id=\"VALUE\">531.17</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1995</Col><Col id=\"VALUE\">748.92</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1996</Col><Col id=\"VALUE\">749.37</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1997</Col><Col id=\"VALUE\">750.9</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1998    </Col><Col id=\"VALUE\">753.19</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">1999    </Col><Col id=\"VALUE\">758.21</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">2000    </Col><Col id=\"VALUE\">759.87</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">2001    </Col><Col id=\"VALUE\">761.98</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">2002    </Col><Col id=\"VALUE\">762.92</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">2003    </Col><Col id=\"VALUE\">763.3</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">200</Col><Col id=\"YEAR\">2004    </Col><Col id=\"VALUE\">763.3</Col><Col id=\"CITY_NAME\">TEHERAN</Col></Row><Row><Col id=\"CITY\">300</Col><Col id=\"YEAR\">1981</Col><Col id=\"VALUE\">454.95</Col><Col id=\"CITY_NAME\">ROME</Col></Row><Row><Col id=\"CITY\">300</Col><Col id=\"YEAR\">1982</Col><Col id=\"VALUE\">455.09</Col><Col id=\"CITY_NAME\">ROME</Col></Row><Row><Col id=\"CITY\">300</Col><Col id=\"YEAR\">1983</Col><Col id=\"VALUE\">455.03</Col><Col id=\"CITY_NAME\">ROME</Col></Row><Row><Col id=\"CITY\">300</Col><Col id=\"YEAR\">1984</Col><Col id=\"VALUE\">455.1</Col><Col id=\"CITY_NAME\">ROME</Col></Row><Row><Col id=\"CITY\">300</Col><Col id=\"YEAR\">1985</Col><Col id=\"VALUE\">455.06</Col><Col id=\"CITY_NAME\">ROME</Col></Row><Row><Col id=\"CITY\">300</Col><Col id=\"YEAR\">1986</Col><Col id=\"VALUE\">455.42</Col><Col id=\"CITY_NAME\">ROME</Col></Row><Row><Col id=\"CITY\">300</Col><Col id=\"YEAR\">1987</Col><Col id=\"VALUE\">455.36</Col><Col id=\"CITY_NAME\">ROME</Col></Row><Row><Col id=\"CITY\">300</Col><Col id=\"YEAR\">1988</Col><Col id=\"VALUE\">455.62</Col><Col id=\"CITY_NAME\">ROME</Col></Row><Row><Col id=\"CITY\">300</Col><Col id=\"YEAR\">1989 </Col><Col id=\"VALUE\">455.66</Col><Col id=\"CITY_NAME\">ROME</Col></Row><Row><Col id=\"CITY\">300</Col><Col id=\"YEAR\">1990 </Col><Col id=\"VALUE\">455.68</Col><Col id=\"CITY_NAME\">ROME</Col></Row><Row><Col id=\"CITY\">300</Col><Col id=\"YEAR\">1991 </Col><Col id=\"VALUE\">455.77</Col><Col id=\"CITY_NAME\">ROME</Col></Row><Row><Col id=\"CITY\">300</Col><Col id=\"YEAR\">1992 </Col><Col id=\"VALUE\">455.9</Col><Col id=\"CITY_NAME\">ROME</Col></Row><Row><Col id=\"CITY\">300</Col><Col id=\"YEAR\">1993 </Col><Col id=\"VALUE\">455.9</Col><Col id=\"CITY_NAME\">ROME</Col></Row><Row><Col id=\"CITY\">300</Col><Col id=\"YEAR\">1994</Col><Col id=\"VALUE\">456.17</Col><Col id=\"CITY_NAME\">ROME</Col></Row><Row><Col id=\"CITY\">300</Col><Col id=\"YEAR\">1995</Col><Col id=\"VALUE\">885.51</Col><Col id=\"CITY_NAME\">ROME</Col></Row><Row><Col id=\"CITY\">300</Col><Col id=\"YEAR\">1996</Col><Col id=\"VALUE\">885.56</Col><Col id=\"CITY_NAME\">ROME</Col></Row><Row><Col id=\"CITY\">300</Col><Col id=\"YEAR\">1997</Col><Col id=\"VALUE\">885.54</Col><Col id=\"CITY_NAME\">ROME</Col></Row><Row><Col id=\"CITY\">300</Col><Col id=\"YEAR\">1998    </Col><Col id=\"VALUE\">885.53</Col><Col id=\"CITY_NAME\">ROME</Col></Row><Row><Col id=\"CITY\">300</Col><Col id=\"YEAR\">1999    </Col><Col id=\"VALUE\">885.61</Col><Col id=\"CITY_NAME\">ROME</Col></Row><Row><Col id=\"CITY\">300</Col><Col id=\"YEAR\">2000    </Col><Col id=\"VALUE\">885.61</Col><Col id=\"CITY_NAME\">ROME</Col></Row><Row><Col id=\"CITY\">300</Col><Col id=\"YEAR\">2001    </Col><Col id=\"VALUE\">885.62</Col><Col id=\"CITY_NAME\">ROME</Col></Row><Row><Col id=\"CITY\">300</Col><Col id=\"YEAR\">2002    </Col><Col id=\"VALUE\">885.7</Col><Col id=\"CITY_NAME\">ROME</Col></Row><Row><Col id=\"CITY\">300</Col><Col id=\"YEAR\">2003    </Col><Col id=\"VALUE\">885.68</Col><Col id=\"CITY_NAME\">ROME</Col></Row><Row><Col id=\"CITY\">300</Col><Col id=\"YEAR\">2004    </Col><Col id=\"VALUE\">885.58</Col><Col id=\"CITY_NAME\">ROME</Col></Row><Row><Col id=\"CITY\">400</Col><Col id=\"YEAR\">1981</Col><Col id=\"VALUE\">454.95</Col><Col id=\"CITY_NAME\">BEIJING</Col></Row><Row><Col id=\"CITY\">400</Col><Col id=\"YEAR\">1982</Col><Col id=\"VALUE\">455.09</Col><Col id=\"CITY_NAME\">BEIJING</Col></Row><Row><Col id=\"CITY\">400</Col><Col id=\"YEAR\">1983</Col><Col id=\"VALUE\">455.03</Col><Col id=\"CITY_NAME\">BEIJING</Col></Row><Row><Col id=\"CITY\">400</Col><Col id=\"YEAR\">1984</Col><Col id=\"VALUE\">455.1</Col><Col id=\"CITY_NAME\">BEIJING</Col></Row><Row><Col id=\"CITY\">400</Col><Col id=\"YEAR\">1985</Col><Col id=\"VALUE\">455.06</Col><Col id=\"CITY_NAME\">BEIJING</Col></Row><Row><Col id=\"CITY\">400</Col><Col id=\"YEAR\">1986</Col><Col id=\"VALUE\">455.42</Col><Col id=\"CITY_NAME\">BEIJING</Col></Row><Row><Col id=\"CITY\">400</Col><Col id=\"YEAR\">1987</Col><Col id=\"VALUE\">455.36</Col><Col id=\"CITY_NAME\">BEIJING</Col></Row><Row><Col id=\"CITY\">400</Col><Col id=\"YEAR\">1988</Col><Col id=\"VALUE\">455.62</Col><Col id=\"CITY_NAME\">BEIJING</Col></Row><Row><Col id=\"CITY\">400</Col><Col id=\"YEAR\">1989 </Col><Col id=\"VALUE\">455.66</Col><Col id=\"CITY_NAME\">BEIJING</Col></Row><Row><Col id=\"CITY\">400</Col><Col id=\"YEAR\">1990 </Col><Col id=\"VALUE\">455.68</Col><Col id=\"CITY_NAME\">BEIJING</Col></Row><Row><Col id=\"CITY\">400</Col><Col id=\"YEAR\">1991 </Col><Col id=\"VALUE\">455.77</Col><Col id=\"CITY_NAME\">BEIJING</Col></Row><Row><Col id=\"CITY\">400</Col><Col id=\"YEAR\">1992 </Col><Col id=\"VALUE\">455.9</Col><Col id=\"CITY_NAME\">BEIJING</Col></Row><Row><Col id=\"CITY\">400</Col><Col id=\"YEAR\">1993 </Col><Col id=\"VALUE\">455.9</Col><Col id=\"CITY_NAME\">BEIJING</Col></Row><Row><Col id=\"CITY\">400</Col><Col id=\"YEAR\">1994</Col><Col id=\"VALUE\">456.17</Col><Col id=\"CITY_NAME\">BEIJING</Col></Row><Row><Col id=\"CITY\">400</Col><Col id=\"YEAR\">1995</Col><Col id=\"VALUE\">885.51</Col><Col id=\"CITY_NAME\">BEIJING</Col></Row><Row><Col id=\"CITY\">400</Col><Col id=\"YEAR\">1996</Col><Col id=\"VALUE\">885.56</Col><Col id=\"CITY_NAME\">BEIJING</Col></Row><Row><Col id=\"CITY\">400</Col><Col id=\"YEAR\">1997</Col><Col id=\"VALUE\">885.54</Col><Col id=\"CITY_NAME\">BEIJING</Col></Row><Row><Col id=\"CITY\">400</Col><Col id=\"YEAR\">1998    </Col><Col id=\"VALUE\">885.53</Col><Col id=\"CITY_NAME\">BEIJING</Col></Row><Row><Col id=\"CITY\">400</Col><Col id=\"YEAR\">1999    </Col><Col id=\"VALUE\">885.61</Col><Col id=\"CITY_NAME\">BEIJING</Col></Row><Row><Col id=\"CITY\">400</Col><Col id=\"YEAR\">2000    </Col><Col id=\"VALUE\">885.61</Col><Col id=\"CITY_NAME\">BEIJING</Col></Row><Row><Col id=\"CITY\">400</Col><Col id=\"YEAR\">2001    </Col><Col id=\"VALUE\">885.62</Col><Col id=\"CITY_NAME\">BEIJING</Col></Row><Row><Col id=\"CITY\">400</Col><Col id=\"YEAR\">2002    </Col><Col id=\"VALUE\">885.7</Col><Col id=\"CITY_NAME\">BEIJING</Col></Row><Row><Col id=\"CITY\">400</Col><Col id=\"YEAR\">2003    </Col><Col id=\"VALUE\">885.68</Col><Col id=\"CITY_NAME\">BEIJING</Col></Row><Row><Col id=\"CITY\">400</Col><Col id=\"YEAR\">2004    </Col><Col id=\"VALUE\">885.58</Col><Col id=\"CITY_NAME\">BEIJING</Col></Row><Row><Col id=\"CITY\">500</Col><Col id=\"YEAR\">1986</Col><Col id=\"VALUE\">215.11</Col><Col id=\"CITY_NAME\">HANOI</Col></Row><Row><Col id=\"CITY\">500</Col><Col id=\"YEAR\">1987</Col><Col id=\"VALUE\">215.12</Col><Col id=\"CITY_NAME\">HANOI</Col></Row><Row><Col id=\"CITY\">500</Col><Col id=\"YEAR\">1988</Col><Col id=\"VALUE\">500.65</Col><Col id=\"CITY_NAME\">HANOI</Col></Row><Row><Col id=\"CITY\">500</Col><Col id=\"YEAR\">1989 </Col><Col id=\"VALUE\">500.73</Col><Col id=\"CITY_NAME\">HANOI</Col></Row><Row><Col id=\"CITY\">500</Col><Col id=\"YEAR\">1990 </Col><Col id=\"VALUE\">500.92</Col><Col id=\"CITY_NAME\">HANOI</Col></Row><Row><Col id=\"CITY\">500</Col><Col id=\"YEAR\">1991 </Col><Col id=\"VALUE\">500.88</Col><Col id=\"CITY_NAME\">HANOI</Col></Row><Row><Col id=\"CITY\">500</Col><Col id=\"YEAR\">1992 </Col><Col id=\"VALUE\">500.87</Col><Col id=\"CITY_NAME\">HANOI</Col></Row><Row><Col id=\"CITY\">500</Col><Col id=\"YEAR\">1993 </Col><Col id=\"VALUE\">500.86</Col><Col id=\"CITY_NAME\">HANOI</Col></Row><Row><Col id=\"CITY\">500</Col><Col id=\"YEAR\">1994</Col><Col id=\"VALUE\">501.32</Col><Col id=\"CITY_NAME\">HANOI</Col></Row><Row><Col id=\"CITY\">500</Col><Col id=\"YEAR\">1995</Col><Col id=\"VALUE\">501.28</Col><Col id=\"CITY_NAME\">HANOI</Col></Row><Row><Col id=\"CITY\">500</Col><Col id=\"YEAR\">1996</Col><Col id=\"VALUE\">501.32</Col><Col id=\"CITY_NAME\">HANOI</Col></Row><Row><Col id=\"CITY\">500</Col><Col id=\"YEAR\">1997</Col><Col id=\"VALUE\">501.2</Col><Col id=\"CITY_NAME\">HANOI</Col></Row><Row><Col id=\"CITY\">500</Col><Col id=\"YEAR\">1998    </Col><Col id=\"VALUE\">501.15</Col><Col id=\"CITY_NAME\">HANOI</Col></Row><Row><Col id=\"CITY\">500</Col><Col id=\"YEAR\">1999    </Col><Col id=\"VALUE\">501.41</Col><Col id=\"CITY_NAME\">HANOI</Col></Row><Row><Col id=\"CITY\">500</Col><Col id=\"YEAR\">2000    </Col><Col id=\"VALUE\">501.44</Col><Col id=\"CITY_NAME\">HANOI</Col></Row><Row><Col id=\"CITY\">500</Col><Col id=\"YEAR\">2001    </Col><Col id=\"VALUE\">501.44</Col><Col id=\"CITY_NAME\">HANOI</Col></Row><Row><Col id=\"CITY\">500</Col><Col id=\"YEAR\">2002    </Col><Col id=\"VALUE\">501.42</Col><Col id=\"CITY_NAME\">HANOI</Col></Row><Row><Col id=\"CITY\">500</Col><Col id=\"YEAR\">2003    </Col><Col id=\"VALUE\">501.36</Col><Col id=\"CITY_NAME\">HANOI</Col></Row><Row><Col id=\"CITY\">500</Col><Col id=\"YEAR\">2004    </Col><Col id=\"VALUE\">501.34</Col><Col id=\"CITY_NAME\">HANOI</Col></Row><Row><Col id=\"CITY\">600</Col><Col id=\"YEAR\">1989 </Col><Col id=\"VALUE\">537.25</Col><Col id=\"CITY_NAME\">OSLO</Col></Row><Row><Col id=\"CITY\">600</Col><Col id=\"YEAR\">1990 </Col><Col id=\"VALUE\">537.19</Col><Col id=\"CITY_NAME\">OSLO</Col></Row><Row><Col id=\"CITY\">600</Col><Col id=\"YEAR\">1991 </Col><Col id=\"VALUE\">537.27</Col><Col id=\"CITY_NAME\">OSLO</Col></Row><Row><Col id=\"CITY\">600</Col><Col id=\"YEAR\">1992 </Col><Col id=\"VALUE\">537.13</Col><Col id=\"CITY_NAME\">OSLO</Col></Row><Row><Col id=\"CITY\">600</Col><Col id=\"YEAR\">1993 </Col><Col id=\"VALUE\">536.86</Col><Col id=\"CITY_NAME\">OSLO</Col></Row><Row><Col id=\"CITY\">600</Col><Col id=\"YEAR\">1994</Col><Col id=\"VALUE\">539.85</Col><Col id=\"CITY_NAME\">OSLO</Col></Row><Row><Col id=\"CITY\">600</Col><Col id=\"YEAR\">1995</Col><Col id=\"VALUE\">539.87</Col><Col id=\"CITY_NAME\">OSLO</Col></Row><Row><Col id=\"CITY\">600</Col><Col id=\"YEAR\">1996</Col><Col id=\"VALUE\">539.89</Col><Col id=\"CITY_NAME\">OSLO</Col></Row><Row><Col id=\"CITY\">600</Col><Col id=\"YEAR\">1997</Col><Col id=\"VALUE\">539.71</Col><Col id=\"CITY_NAME\">OSLO</Col></Row><Row><Col id=\"CITY\">600</Col><Col id=\"YEAR\">1998    </Col><Col id=\"VALUE\">539.79</Col><Col id=\"CITY_NAME\">OSLO</Col></Row><Row><Col id=\"CITY\">600</Col><Col id=\"YEAR\">1999    </Col><Col id=\"VALUE\">539.73</Col><Col id=\"CITY_NAME\">OSLO</Col></Row><Row><Col id=\"CITY\">600</Col><Col id=\"YEAR\">2000    </Col><Col id=\"VALUE\">539.83</Col><Col id=\"CITY_NAME\">OSLO</Col></Row><Row><Col id=\"CITY\">600</Col><Col id=\"YEAR\">2001    </Col><Col id=\"VALUE\">539.84</Col><Col id=\"CITY_NAME\">OSLO</Col></Row><Row><Col id=\"CITY\">600</Col><Col id=\"YEAR\">2002    </Col><Col id=\"VALUE\">539.71</Col><Col id=\"CITY_NAME\">OSLO</Col></Row><Row><Col id=\"CITY\">600</Col><Col id=\"YEAR\">2003    </Col><Col id=\"VALUE\">539.64</Col><Col id=\"CITY_NAME\">OSLO</Col></Row><Row><Col id=\"CITY\">600</Col><Col id=\"YEAR\">2004    </Col><Col id=\"VALUE\">539.59</Col><Col id=\"CITY_NAME\">OSLO</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1983</Col><Col id=\"VALUE\">200</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1980</Col><Col id=\"VALUE\">10.04</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1983</Col><Col id=\"VALUE\">300</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1980</Col><Col id=\"VALUE\">10.04</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1980</Col><Col id=\"VALUE\">10.04</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1980</Col><Col id=\"VALUE\">10.04</Col><Col id=\"CITY_NAME\">LONDON</Col></Row><Row><Col id=\"CITY\">102</Col><Col id=\"YEAR\">1982</Col><Col id=\"VALUE\">100</Col><Col id=\"CITY_NAME\">LONDON</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_data1", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CITY\" type=\"STRING\" size=\"256\"/><Column id=\"CITY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CITY_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"CITY_AVG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_output","15","76","700","301",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_data1");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.getSetter("position").set("absolute");
            obj.set_cellsizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","356","387","359","208",null,null,null,null,null,null,this);
            obj.set_text(" 설명 ");
            obj.set_taborder("3");
            obj.set_cssclass("_gb_sample");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","367","405","348","182",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("데이터를 크로스탭으로 구성한 후 Dataset의 칼럼 정보를 \r\n기준으로 한 Grid 컨텐츠 스트링을 xml로 만들어 formats \r\n속성에 입력하면 Grid 칼럼을 동적으로 구성할 수 있음\r\n\r\n※ 왼쪽 Grid의 데이터를 상단 Grid처럼 행과 열을 교차시켜 \r\n데이터를 집계하는 크로스탭(엑셀의 피봇) 형태로 구성함");
            obj.set_cssclass("_SS_Text");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","15","10","242","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("크로스탭 Grid 생성하기");
            obj.set_cssclass("_SS_Emphasis");
            this.addChild(obj.name, obj);

            obj = new Button("btn_execute","15","41","91","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("execute");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","15","385","333","210",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_data0");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"CITY\"/><Cell col=\"1\" disptype=\"normal\" text=\"YEAR\"/><Cell col=\"2\" disptype=\"normal\" text=\"VALUE\"/><Cell col=\"3\" disptype=\"normal\" text=\"CITY_NAME\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:CITY\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:YEAR\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:VALUE\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:CITY_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SML040Comp_Grid_Row_ScriptColumn2.xfdl", function() {

        this.btn_execute_onclick = function(obj,  e)
        {
        	this.fn_crossTab();
        };

        this.fn_crossTab = function()
        {
        	this.ds_data1.clearData();
        	var strContents	= "";
        	var strColu  	= "";
        	var strHead     = "";
        	var strBody     = "";
        	var strSum1		= "";
        	var strSum2		= "";
        	var sMaxYEAR 	= this.fn_Trim(this.ds_data0.getMax("YEAR"));
        	var sMinYEAR 	= this.fn_Trim(this.ds_data0.getMin("YEAR"));
        	var nI = 0;

        	for (var i = sMaxYEAR; i >= sMinYEAR; i--)
        	{
        		if (this.ds_data0.findRow( "YEAR", i) > -1)
        		{
        			this.ds_data1.addColumn("C_" + i, "BIGDECIMAL", 255);
        			nI++;
        			strColu += '			<Column size="90"/>							\n';
        			strHead += '			<Cell col="' + nI + '" style="background:#4da9ceff;color:white;" text="' + i + '" />		\n';
        			strBody += '			<Cell col="' + nI + '" style="align:right;background:white;background2:#f0f7fdff;" text="bind:C_' + i + '" />  \n';
        			strSum1 += '			<Cell col="' + nI + '" style="align:right;background:#4da9ceff;color:white;" text="" />  \n';
        			strSum2 += '			<Cell row="1"  col="' + nI + '" style="align:right;background:#4da9ceff;color:white;" text="" />  \n';
        		}
        	}

        	var nJ = ++nI;
        	var nK = ++nI;

        	strContents += '			<Formats>									\n';
        	strContents += '			<Format id="default">						\n';
        	strContents += '				<Columns>								\n';
        	strContents += '					<Column  size="100" band="left"/>	\n';
        	strContents += strColu;
        	strContents += '					<Column  size="100" band="right"/>	\n';
        	strContents += '					<Column  size="100" band="right"/>	\n';
        	strContents += '				</Columns>								\n';
        	strContents += '				<Rows>									\n';
        	strContents += '					<Row size="24" band="head" />		\n';
        	strContents += '					<Row size="24" />					\n';
        	strContents += '					<Row size="24" band="summ" />		\n';
        	strContents += '					<Row size="24" band="summ" />		\n';
        	strContents += '				</Rows>									\n';
        	strContents += '				<Band id="head">						\n';
        	strContents += '					<Cell style="background:#4da9ceff;color:white;" text="CITY"/> \n';
        	strContents += strHead;
        	strContents += '					<Cell col="'+ nJ +'" style="background:#4da9ceff;color:white;" text="SUM"/>\n';
        	strContents += '					<Cell col="'+ nK +'" style="background:#4da9ceff;color:white;" text="AVG"/>	\n';
        	strContents += '				</Band>									\n';
        	strContents += '				<Band id="body">						\n';
        	strContents += '					<Cell style="align:center;background:#4da9ceff;background2:#4da9ceff;color:white;color2:white;" text="bind:CITY_NAME"/>	\n';
        	strContents += strBody;
        	strContents += '					<Cell col="'+ nJ +'" style="align:right;background:#4da9ceff;background2:#4da9ceff;color:white;color2:white;" text="bind:CITY_SUM"/>	\n';
        	strContents += '					<Cell col="'+ nK +'" style="align:right;background:#4da9ceff;background2:#4da9ceff;color:white;color2:white;" text="bind:CITY_AVG"/>	\n';
        	strContents += '				</Band>									\n';
        	strContents += '				<Band id="summary">						\n';
        	strContents += '					<Cell style="align:center;background:#4da9ceff;color:white;" text="SUM"/>	\n';
        	strContents += strSum1;
        	strContents += '					<Cell col="'+ nJ +'" style="align:right;background:#4da9ceff;background2:#4da9ceff;color:white;" text=""/>	\n';
        	strContents += '					<Cell col="'+ nK +'" style="background:#4da9ceff;background2:#4da9ceff;color:white;" text=""/>	\n';
        	strContents += '					<Cell row="1" style="align:center;background:#4da9ceff;color:white;" text="AVG"/>	\n';
        	strContents += strSum2;
        	strContents += '					<Cell row="1" col="'+ nJ +'" style="background:#4da9ceff;background2:#4da9ceff;color:white;" text=""/>	\n';
        	strContents += '					<Cell row="1" col="'+ nK +'" style="background:#4da9ceff;background2:#4da9ceff;color:white;" text=""/>	\n';
        	strContents += '				</Band>									\n';
        	strContents += '			</Format>									\n';
        	strContents += '			</Formats>									\n';

        	this.grd_output.set_formats(strContents);

        	this.fn_dataSet();

            //Summary
        	var sMaxYEAR 	= this.fn_Trim(this.ds_data0.getMax("YEAR"));
        	var sMinYEAR 	= this.fn_Trim(this.ds_data0.getMin("YEAR"));

        	var nJ = 1;
        	var nK = 1 + (this.ds_data1.colcount - 4) + 3; //start + (dsColcount - fix) + (SUM + AVG+ CITY)

        	this.grd_output.set_enableredraw(false);
        	for (var i = sMaxYEAR; i >= sMinYEAR; i--)
        	{
        		if (this.ds_data0.findRow( "YEAR", i) > -1)
        		{
        			this.grd_output.setCellProperty( "Summ", nJ++, "text", nexacro.round(this.ds_data1.getSum("C_" + i), 2));
        			this.grd_output.setCellProperty( "Summ", nK++, "text", nexacro.round(this.ds_data1.getAvg("C_" + i), 2));
        		}
        	}

        	this.grd_output.setCellProperty( "Summ", nJ++, "text", nexacro.round(this.ds_data0.getSum("VALUE"), 2));
        	this.grd_output.set_enableredraw(true);
        };

        this.fn_dataSet = function()
        {
        	var nAddRow	 = 0;
        	var strTmp   = "";
        	var nSum   = 0;

        	this.ds_data1.set_enableevent(false);

        	this.ds_data0.set_keystring("S:CITY+YEAR");

        	for (var i = 0; i < this.ds_data0.rowcount; i++)
        	{
        		if (this.ds_data0.getColumn(i,"CITY") != strTmp)
        		{
                    nAddRow = this.ds_data1.addRow();
                    this.ds_data1.setColumn(nAddRow, "CITY" 	   , this.ds_data0.getColumn(i, "CITY"));
                    this.ds_data1.setColumn(nAddRow, "CITY_NAME", this.ds_data0.getColumn(i, "CITY_NAME"));
                    this.ds_data1.setColumn(nAddRow, "CITY_SUM" , nexacro.round(this.ds_data0.getCaseSum("CITY == '" + this.ds_data0.getColumn(i,"CITY") + "'", "VALUE"), 2));
                    this.ds_data1.setColumn(nAddRow, "CITY_AVG" , nexacro.round(this.ds_data0.getCaseAvg("CITY == '" + this.ds_data0.getColumn(i,"CITY") + "'", "VALUE"), 2));
                    this.ds_data1.setColumn(nAddRow, "C_" + this.fn_Trim(this.ds_data0.getColumn(i, "YEAR")), this.ds_data0.getColumn(i, "VALUE"));
        		}
        		else
        		{
                    nSum = nexacro.round(Number(this.fn_Trim(this.ds_data1.getColumn(nAddRow, "C_" + this.fn_Trim(this.ds_data0.getColumn(i, "YEAR")))))
                         + this.ds_data0.getColumn(i, "VALUE"), 2);
                    this.ds_data1.setColumn(nAddRow, "C_" + this.fn_Trim(this.ds_data0.getColumn(i, "YEAR")), nSum);
        		}

        		strTmp = this.ds_data0.getColumn(i, "CITY");
        	}

        	this.ds_data1.set_enableevent(true);
        	this.ds_data1.set_rowposition(-1);
        };

        this.fn_Trim = function(sValue)
        {
            if (sValue == null) return "";
            if (new String(sValue).valueOf() == "undefined") return "";
            if (new String(sValue) == null) return "";

            var retVal = (new String(sValue)).replace(/^\s+|\s+$/g, '');

            return retVal;
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_execute.addEventHandler("onclick",this.btn_execute_onclick,this);
        };
        this.loadIncludeScript("SML040Comp_Grid_Row_ScriptColumn2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
