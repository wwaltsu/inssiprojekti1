*** Settings ***
Documentation    Buffetin olisi tarkoitus näyttää hinnaksi 11,30€

Library    Browser

*** Variables ***
${URL}    localhost:3000

*** Test Cases ***
Example Test
    New Page    ${URL}
    ${hinta}=    Get Text    //*[@id="root"]/div/div/table/tbody/tr[2]/td/p[1]/strong
    Log    ${hinta}
    Should Be Equal    ${hinta}    Buffet 11,30 €
