# Object Tree List View
Open index.html.

Data
```
let obj = {
    a : {
        aa : {
            aaa: {
                aaaa : "string aaaa"
            },
            bbb: "string bbb"
        },
        a1 : "string a1"
    },
    b : {
        bb : "string bb"
    }
};
```

Binding
```
<ul>
    <li><span>a</span>
        <ul>
            <li><span>aa</span>
                <ul>
                    <li><span>aaa</span>
                        <ul>
                            <li><span>aaaa</span>
                                <ul>
                                    <li><span>value : string aaaa</span></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><span>bbb</span>
                        <ul>
                            <li><span>value : string bbb</span></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><span>a1</span>
                <ul>
                    <li><span>value : string a1</span></li>
                </ul>
            </li>
        </ul>
    </li>
    <li><span>b</span>
        <ul>
            <li><span>bb</span>
                <ul>
                    <li><span>value : string bb</span></li>
                </ul>
            </li>
        </ul>
    </li>
</ul>
```