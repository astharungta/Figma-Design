# Business Requirements Document
## cc0c63b4-3a5d-47d6-9887-41d8a5766a5a-gm_ewarr_sale 3.fmb

**Document Version:** 1.0  
**Generated:** 2026-01-05T04:51:45.556Z  
**Form Version:** 1.0  
**Document Type:** Business Requirements Document (BRD)

---

# Business Requirements Document (BRD)
## Extended Warranty Sales System (gm_ewarr_sale) - BRD

Document Version: 1.0  
Generated On: [Current Date]  
Source System: Oracle Forms (gm_ewarr_sale.fmb)  
Purpose: Modernization Requirements Documentation

---

# 1. Business Overview

The Extended Warranty Sales System is a comprehensive Oracle Forms application designed to manage the sales and administration of extended warranty policies for vehicles. It enables dealers and service advisors to create new warranty contracts, calculate premiums based on vehicle details and coverage options, process payments (including cash, cheque, credit card, and EMI), handle GST calculations, manage add-on packages like the Comprehensive Care Package (CCP), verify customers through OTP, upload warranty-related documents, generate e-invoices, and integrate with GST systems. The system also supports loyalty program redemptions and handles both B2B and B2C transactions.

---

# 2. Business Purpose

## 2.1 Primary Business Objectives
- Streamline the sales process for extended vehicle warranties
- Accurately calculate premiums based on vehicle specifications and coverage options
- Provide a centralized system for warranty policy management and administration
- Ensure compliance with GST regulations and e-invoicing requirements
- Enable integration with loyalty programs for point redemptions
- Support multiple payment modes, including EMI and online payments
- Facilitate document management and record-keeping for warranties

## 2.2 Target Users and Stakeholders
- Primary Users: Dealers, Service Advisors, Sales Executives
- Secondary Users: Finance Teams, Compliance Officers, Customer Support
- Stakeholders: Vehicle Manufacturers, Insurance Providers, Tax Authorities

## 2.3 Business Value Proposition
- Revenue generation through extended warranty sales
- Cost reduction by streamlining warranty administration processes
- Improved customer satisfaction through seamless warranty purchase experience
- Compliance with regulatory requirements, mitigating legal and financial risks
- Data accuracy and integrity through centralized warranty management
- Process automation, leading to increased operational efficiency
- Enhanced decision support through comprehensive warranty data and reporting

## 2.4 Key Business Capabilities
- Extended warranty policy creation and management
- Premium calculation based on vehicle details, warranty type, and coverage
- Payment processing (cash, cheque, credit card, EMI, online)
- GST computation (CGST, SGST, IGST) and e-invoice generation
- Loyalty program integration for point redemptions
- Document upload and management for warranty-related files
- Customer verification through OTP for loyalty redemptions
- Add-on package (CCP) sales and management
- Integration with GST systems for e-invoicing and compliance

## 2.5 Business Context and Scope
- Upstream Systems: Vehicle Master Data (OEM Systems), Customer Relationship Management (CRM), Loyalty Management System
- Downstream Systems: Finance and Accounting Systems, Reporting and Analytics Platforms, Tax Compliance Systems
- Business Process Scope: The application covers the end-to-end process of extended warranty sales, from policy creation to payment processing, document management, and integration with external systems.

---

# 3. Process Workflow

## 3.1 L1 Process: Extended Warranty Sales and Management
This application facilitates the entire lifecycle of extended warranty sales, from policy creation to payment processing, document management, and integration with external systems.

### 3.1.1 L2 Process: Warranty Policy Creation
The process begins with the creation of a new extended warranty policy for a vehicle.

#### L3 Process: Create New Extended Warranty
1. User enters or scans the Vehicle Identification Number (VIN)
2. System validates the VIN and retrieves vehicle details (model, variant, color, etc.)
3. System populates vehicle information (retail sale date, mileage, etc.)
4. User selects the extended warranty type (based on vehicle eligibility)
5. System calculates the premium based on warranty type, vehicle details, and coverage options
6. User enters customer information (name, address, contact details, GST number)
7. System validates customer data and performs GST number verification
8. User selects the payment mode (cash, cheque, credit card, EMI, online)
9. If EMI or online payment, system initiates the respective payment process
10. If loyalty program is enabled, user can redeem points (OTP verification required)
11. User uploads relevant documents (invoices, registration certificates, etc.)
12. System generates the extended warranty policy number and e-invoice
13. If add-on packages (like CCP) are eligible, user can select and purchase them
14. System updates the policy with add-on details and generates separate invoices
15. User confirms and finalizes the extended warranty sale
16. System integrates with GST systems for e-invoice compliance
17. System updates warranty records in the database
18. User can print or email the warranty certificate and invoices to the customer

### 3.1.2 L2 Process: Warranty Policy Management
After the initial sale, the system supports various management activities related to extended warranty policies.

#### L3 Process: View/Update Warranty Policy
1. User searches for an existing warranty policy by policy number or VIN
2. System retrieves and displays the policy details
3. User can update specific fields (if allowed), such as customer contact information
4. System validates any changes and updates the policy record

#### L3 Process: Cancel Warranty Policy
1. User searches for an existing warranty policy
2. System checks if the policy is eligible for cancellation (based on rules)
3. If eligible, user initiates the cancellation process
4. System calculates any refund amount (if applicable)
5. User confirms the cancellation
6. System updates the policy status to "Cancelled" and processes any refunds
7. System generates a cancellation notification or document

#### L3 Process: Renew Warranty Policy
1. System identifies policies nearing expiration (based on validity period or mileage)
2. User reviews the list of expiring policies
3. User contacts the customer to offer a renewal option
4. If the customer agrees, user initiates the renewal process
5. System calculates the renewal premium based on updated vehicle details
6. User processes the renewal payment
7. System generates a new policy number and updates the warranty records
8. System sends renewal confirmation to the customer

### 3.1.3 L2 Process: Reporting and Analytics
The system provides reporting and analytics capabilities to support decision-making and performance monitoring.

#### L3 Process: Generate Warranty Sales Reports
1. User selects the desired report type (sales summary, revenue, etc.)
2. User specifies the report parameters (date range, dealer, region, etc.)
3. System retrieves the relevant warranty data from the database
4. System generates the report in the requested format (PDF, Excel, etc.)
5. User can view, print, or share the report as needed

#### L3 Process: Monitor Warranty Performance
1. System tracks key performance indicators (KPIs) related to warranty sales
2. User can view real-time dashboards or periodic reports
3. KPIs may include sales volume, revenue, customer satisfaction, claim rates, etc.
4. User can drill down into specific regions, dealers, or product lines
5. System highlights any deviations from targets or historical trends
6. User can take corrective actions or adjust strategies based on the insights

---

# 4. Detailed Use Cases

## 4.1 Use Case: Create New Extended Warranty
Description: This use case covers the process of creating a new extended warranty policy for a vehicle.

Actors: Dealer, Service Advisor

Pre-conditions:
- User is authenticated and authorized to create warranties
- Vehicle and customer data are available in the system

Steps:
1. User navigates to the "Create New Warranty" screen
2. User enters the Vehicle Identification Number (VIN) or scans the VIN barcode
3. System validates the VIN and retrieves vehicle details from the database (tables: GM_VIN, SH_INVOICE, AM_DEALER_LOC)
4. System populates the vehicle information (model, variant, color, retail sale date, mileage, etc.)
5. System checks if the vehicle is eligible for an extended warranty based on age and mileage (trigger: PKG_EXTE_WAR.SP_EW_VIN_VALIDATE)
6. If eligible, user selects the extended warranty type from the list (data source: AM_LIST table, filtered by NB_EWR_TYPE flag)
7. System calculates the premium based on the warranty type, vehicle details, and coverage options (procedure: PKG_EXTE_WAR.EW_CALC_PREM_GST)
8. User enters customer information (name, address, contact details, GST number)
9. System validates the customer data, including GST number verification (procedure: PKG_EINV.SP_VALIDATE_GSTN)
10. User selects the payment mode (cash, cheque, credit card, EMI, online)
11. If EMI or online payment, system initiates the respective payment process (integration with payment gateway)
12. If loyalty program is enabled, user can enter the loyalty card number
13. System retrieves the customer's loyalty details from the loyalty system (procedure: PKG_LOYALTY.SP_GET_VIN_LOYALTY_DTL)
14. If redeeming points, user enters the OTP received on the registered mobile number
15. System validates the OTP and calculates the redeemable amount (procedure: PKG_LOYALTY.SF_CALCULATE_POINTS_TO_RUPEES)
16. User uploads relevant documents (invoices, registration certificates, etc.) (block: B_EW_DOCS)
17. System generates the extended warranty policy number and e-invoice number
18. If the vehicle is eligible for add-on packages (like CCP), user can select the desired package (data source: AM_LIST, VT_ADDON tables)
19. System calculates the add-on package premium and generates a separate invoice (procedure: PKG_ADDON_SALE.CALC_PREM)
20. User confirms and finalizes the extended warranty sale
21. System updates the warranty records in the database (tables: MWAR_EXTE, VT_ADDON)
22. System integrates with GST systems for e-invoice compliance (procedure: PKG_EXTE_WAR.EW_INV_DATA)
23. User can print or email the warranty certificate and invoices to the customer

Post-conditions:
- Extended warranty policy is created and recorded in the system
- Customer is notified, and relevant documents are provided
- Payment is processed, and loyalty points are redeemed (if applicable)
- E-invoices are generated and submitted to GST systems

Database Objects:
- Tables: MWAR_EXTE, VT_ADDON, GM_VIN, SH_INVOICE, AM_DEALER_LOC, AM_LIST, GD_LOYALTY_ENROL
- Triggers: WhenValidateItem, WhenButtonPressed (multiple instances)
- Stored Procedures: PKG_EXTE_WAR.SP_EW_VIN_VALIDATE, PKG_EXTE_WAR.EW_CALC_PREM_GST, PKG_EINV.SP_VALIDATE_GSTN, PKG_LOYALTY.SP_GET_VIN_LOYALTY_DTL, PKG_LOYALTY.SF_CALCULATE_POINTS_TO_RUPEES, PKG_ADDON_SALE.CALC_PREM, PKG_EXTE_WAR.EW_INV_DATA

Validations:
- VIN validation and vehicle eligibility check
- Customer data validation (name, address, GST number)
- Payment mode validation (based on configuration)
- Loyalty point redemption validation (available balance, OTP verification)
- Document upload validation (file size, type, etc.)

[Continue with other use cases...]

---

# 5. List of All Validations and Business Rules

## 5.1 Vehicle and Warranty Eligibility
| Rule # | Business Rule | Technical Implementation | Trigger/SP Name | Error Message |
|--------|---------------|-------------------------|-----------------|---------------|
| 1 | Vehicle must be within the eligible age and mileage range for the selected warranty type | Check vehicle age and mileage against predefined limits from the master data | PKG_EXTE_WAR.SP_EW_VIN_VALIDATE | 'Vehicle is not eligible for extended warranty' |
| 2 | Warranty type must be compatible with the vehicle model (e.g., commercial vehicles may have different warranty options) | Check warranty type against the list of allowed types for the vehicle model/variant | PKG_EXTE_WAR.SP_EW_VIN_VALIDATE | 'Selected warranty type is not valid for this vehicle model' |
| 3 | Certain warranty types may not be available for specific vehicle categories (e.g., NEXA, commercial) | Check warranty type against the list of allowed types for the vehicle category | WHEN-VALIDATE-ITEM (B_VT_EWARR_SALE.nb_exte_warr_type_old), WHEN-VALIDATE-ITEM (B_VT_EWARR_SALE.nb_exte_warr_type_new) | 'Extended Warranty Option Not valid for NEXA Vehicle', 'Extended Warranty Option Not valid for [vehicle description]' |

## 5.2 Premium Calculation
| Rule # | Business Rule | Technical Implementation | Trigger/SP Name | Error Message |
|--------|---------------|-------------------------|-----------------|---------------|
| 1 | Premium calculation must consider the warranty type, vehicle details (model, variant, age, mileage), and coverage options | Fetch premium calculation parameters from master tables and apply the calculation logic | PKG_EXTE_WAR.EW_CALC_PREM_GST | 'Error in premium calculation' |
| 2 | GST rates (CGST, SGST, IGST) must be applied based on the customer's state and the place of supply | Determine GST rates from the master data based on customer state and warranty type | PKG_EXTE_WAR.EW_CALC_PREM_GST | 'Error in GST rate determination' |
| 3 | Dealer commission rates must be considered in the premium calculation | Fetch dealer commission rates from master data and apply them to the premium calculation | PKG_EXTE_WAR.EW_CALC_PREM_GST | 'Error in dealer commission calculation' |
| 4 | Free extended warranty or cash discounts may be applicable based on the vehicle variant and purchase date | Check for free warranty or cash discount eligibility based on the vehicle details and purchase date | Trigger code in the form | 'Free extended warranty is applicable for this vehicle' |

## 5.3 Customer and Payment Validation
| Rule # | Business Rule | Technical Implementation | Trigger/SP Name | Error Message |
|--------|---------------|-------------------------|-----------------|---------------|
| 1 | Customer name, address, and contact details must be provided | Check for null or empty values in the respective fields | PROC_CHECK_NULL procedure | 'Customer Name cannot be blank', 'Customer Address1 cannot be blank', etc. |
| 2 | Customer GST number must be valid and verified against the GST system | Call the GST verification procedure with the customer GST number | PKG_EINV.SP_VALIDATE_GSTN | 'Invalid GST Number' |
| 3 | Payment mode must be selected, and relevant payment details must be provided (e.g., cheque number, bank name for cheque payments) | Check for null or empty values in the payment-related fields based on the selected payment mode | Trigger code in the form | 'Please select payment mode', 'Cheque Number cannot be blank', etc. |
| 4 | For EMI or online payments, additional validations may be required (e.g., integration with payment gateways, OTP verification) | Call external payment gateway APIs or implement custom validation logic | Trigger code in the form, external API calls | 'Payment gateway integration failed', 'Invalid OTP', etc. |

## 5.4 Loyalty Program Integration
| Rule # | Business Rule | Technical Implementation | Trigger/SP Name | Error Message |
|--------|---------------|-------------------------|-----------------|---------------|
| 1 | Loyalty card number must be valid and registered in the loyalty system | Call the loyalty system API to validate the card number | PKG_LOYALTY.SP_GET_VIN_LOYALTY_DTL | 'Invalid Loyalty Card Number' |
| 2 | Redeemable points must be calculated based on the loyalty tier, channel, and transaction amount | Call the loyalty system API to calculate redeemable points based on the provided parameters | PKG_LOYALTY.SF_CALCULATE_POINTS_TO_RUPEES | 'Error in points calculation' |
| 3 | OTP must be sent to the registered mobile number for point redemption and verified by the customer | Call the loyalty system API to send OTP and verify the entered OTP | PKG_LOYALTY.SP_SEND_SMS, Trigger code in the form | 'OTP verification failed' |
| 4 | Redeemed points must be deducted from the customer's loyalty account balance | Call the loyalty system API to update the customer's account balance after redemption | Trigger code in the form, external API calls | 'Error in updating loyalty account balance' |

## 5.5 Document Management
| Rule # | Business Rule | Technical Implementation | Trigger/SP Name | Error Message |
|--------|---------------|-------------------------|-----------------|---------------|
| 1 | A minimum of 4 documents must be uploaded for each warranty policy | Check the count of uploaded documents and enforce the minimum requirement | Trigger code in the form | 'Please Upload Minimum 4 Documents' |
| 2 | Uploaded document file size must not exceed a predefined limit (e.g., 5 MB) | Check the file size of each uploaded document against the configured limit | Trigger code in the form | 'Document has not been loaded. Size of document exceeding 5 MB' |
| 3 | Certain document types may be mandatory (e.g., invoice, registration certificate) | Check the document types and enforce mandatory document uploads | Trigger code in the form | 'Please upload the vehicle registration certificate' |
| 4 | Document filenames must follow a specific naming convention | Construct the filename based on the defined convention (e.g., VIN_PolicyNumber_DocumentType) | Trigger code in the form | 'Invalid document filename' |

## 5.6 Add-on Package (CCP) Management
| Rule # | Business Rule | Technical Implementation | Trigger/SP Name | Error Message |
|--------|---------------|-------------------------|-----------------|---------------|
| 1 | Add-on packages (like CCP) may only be available for certain vehicle models or variants | Check the vehicle details against the eligible models/variants for add-on packages | PKG_ADDON_SALE.SP_VIN_CCP_VALIDATE | 'Add-on package is not available for this vehicle' |
| 2 | Add-on package eligibility may depend on the vehicle's mileage or age | Check the vehicle's mileage or age against the eligibility criteria for add-on packages | PKG_ADDON_SALE.SP_VIN_CCP_VALIDATE | 'Vehicle is not eligible for the add-on package due to high mileage' |
| 3 | Only one add-on package can be selected per warranty policy | Enforce a single selection of add-on packages during the purchase process | Trigger code in the form | 'Multiple add-on packages cannot be selected' |
| 4 | Add-on package premium must be calculated based on the package type, vehicle details, and coverage options | Call the premium calculation procedure for the selected add-on package | PKG_ADDON_SALE.CALC_PREM | 'Error in add-on package premium calculation' |

[Continue with additional business rule categories...]

---

# 6. Table-wise Column Names, Field Names and Description

## 6.1 Table: MWAR_EXTE (Extended Warranty Master)
Purpose: This table stores the details of extended warranty policies issued.

| Column Name | Field Name | Data Type | Length | Required | Description | Business Purpose |
|-------------|------------|-----------|--------|----------|-------------|------------------|
| EXTE_POLICY_NO (PK) | Policy Number | VARCHAR2 | 20 | Y | Unique identifier for the extended warranty policy | Uniquely identify each warranty policy |
| EXTE_VIN_NO | VIN Number | VARCHAR2 | 20 | Y | Vehicle Identification Number | Link the warranty policy to a specific vehicle |
| EXTE_WARR_TYPE | Warranty Type | VARCHAR2 | 4 | Y | Code representing the type of extended warranty | Determine the coverage and pricing of the warranty |
| EXTE_CUST_CD | Customer Code | NUMBER | 10 | Y | Unique identifier for the customer | Link the warranty policy to a specific customer |
| EXTE_CUST_NAME | Customer Name | VARCHAR2 | 40 | Y | Name of the customer | Identify the customer associated with the warranty |
| EXTE_CUST_ADD1 | Customer Address 1 | VARCHAR2 | 35 | Y | First line of the customer's address | Capture the customer's address for communication |
| EXTE_CUST_ADD2 | Customer Address 2 | VARCHAR2 | 35 | N | Second line of the customer's address | Capture the customer's address for communication |
| EXTE_CUST_ADD3 | Customer Address 3 | VARCHAR2 | 35 | N | Third line of the customer's address | Capture the customer's address for communication |
| EXTE_CUST_CITY | Customer City | VARCHAR2 | 30 | Y | City where the customer resides | Identify the customer's location |
| EXTE_CUST_EMAIL | Customer Email | VARCHAR2 | 50 | N | Email address of the customer | Facilitate electronic communication with the customer |
| EXTE_CUST_PHONE | Customer Phone | VARCHAR2 | 15 | N | Phone number of the customer | Provide an alternative contact method for the customer |
| EXTE_CUST_PHONE2 | Customer Phone 2 | VARCHAR2 | 15 | N | Secondary phone number of the customer | Provide an additional contact method for the customer |
| EXTE_CUST_MOBILE | Customer Mobile | VARCHAR2 | 15 | Y | Mobile number of the customer | Facilitate important communications and OTP verification |
| EXTE_CUST_PIN | Customer PIN Code | VARCHAR2 | 6 | Y | PIN code of the customer's address | Identify the customer's location for GST purposes |
| EXTE_BOOKLET_NO | Booklet Number | VARCHAR2 | 20 | N | Booklet or receipt number for the warranty | Provide a reference number for the warranty documentation |
| EXTE_BANK_NAME | Bank Name | VARCHAR2 | 50 | N | Name of the bank (for cheque payments) | Capture payment details for cheque transactions |
| EXTE_CHEQUE_NO | Cheque Number | VARCHAR2 | 20 | N | Cheque number (for cheque payments) | Capture payment details for cheque transactions |
| EXTE_INFAVOUR_OF | In Favour Of | VARCHAR2 | 50 | N | Entity name for the cheque (for cheque payments) | Capture payment details for cheque transactions |
| EXTE_CHEQUE_DATE | Cheque Date | DATE | - | N | Date of the cheque (for cheque payments) | Capture payment details for cheque transactions |
| EXTE_PREMIUM_RCVD | Premium Received | NUMBER | 10,2 | Y | Amount of premium received for the warranty | Track the payment received for the warranty |
| EXTE_PREMIUM | Premium Amount | NUMBER | 10,2 | Y | Total premium amount for the warranty | Capture the calculated premium for the warranty |
| EXTE_PREM_DLR_COMM | Dealer Commission | NUMBER | 10,2 | Y | Commission amount for the dealer | Track the commission earned by the dealer |
| EXTE_PREM_SRV_TAX | Service Tax | NUMBER | 10,2 | N | Service tax amount (legacy field) | Capture service tax for historical records |
| EXTE_PREM_SBC_TAX | SBC Tax | NUMBER | 10,2 | N | Swachh Bharat Cess tax amount (legacy field) | Capture SBC tax for historical records |
| EXTE_PREM_KKC_TAX | KKC Tax | NUMBER | 10,2 | N | Krishi Kalyan Cess tax amount (legacy field) | Capture KKC tax for historical records |
| EXTE_PREMIUM_CALCULATED | Calculated Premium | NUMBER | 10,2 | Y | Premium amount calculated by the system | Store the calculated premium before tax additions |
| EXTE_TOT_PREM_SRV_TAX | Total Service Tax | NUMBER | 10,2 | N | Total service tax amount (legacy field) | Capture total service tax for historical records |
| EXTE_CREATED_BY | Created By | VARCHAR2 | 10 | Y | User ID of the person who created the record | Track the creator of the warranty record |
| EXTE_CREATED_DATE | Created Date | DATE | - | Y | Date and time when the record was created | Track the creation timestamp of the warranty record |
| EXTE_TOT_PREM_SBC_TAX | Total SBC Tax | NUMBER | 10,2 | N | Total Swachh Bharat Cess tax amount (legacy field) | Capture total SBC tax for historical records |
| EXTE_TOT_PREM_KKC_TAX | Total KKC Tax | NUMBER | 10,2 | N | Total Krishi Kalyan Cess tax amount (legacy field) | Capture total KKC tax for historical records |
| EXTE_CUST_STATE | Customer State | VARCHAR2 | 35 | Y | State where the customer resides | Identify the customer's state for GST purposes |
| CUST_GST_NUM | Customer GST Number | VARCHAR2 | 15 | N | GST registration number of the customer | Capture the customer's GST number for tax compliance |
| PLACE_OF_SUPPLY | Place of Supply | VARCHAR2 | 35 | Y | Place where the supply of service is deemed to take place | Determine the applicable GST rates |
| GST_STATE_CD | GST State Code | VARCHAR2 | 2 | Y | Code representing the state for GST purposes | Identify the state for GST rate determination |
| SAC_CODE | SAC Code | VARCHAR2 | 8 | Y | Services Accounting Code for the warranty service | Classify the service for GST purposes |
| GST_TYPE | GST Type | VARCHAR2 | 1 | Y | Flag indicating CGST+SGST ('S') or IGST ('I') | Determine the applicable GST components |
| CONV_GST_TYPE | Conversion GST Type | VARCHAR2 | 1 | N | GST type for conversion invoices (legacy field) | Capture GST type for historical conversion invoices |
| EXTE_PREM_CGST_RATE | CGST Rate | NUMBER | 5,2 | N | Central GST rate percentage | Store the CGST rate applied to the premium |
| EXTE_PREM_SGST_RATE | SGST Rate | NUMBER | 5,2 | N | State GST rate percentage | Store the SGST rate applied to the premium |
| EXTE_PREM_IGST_RATE | IGST Rate | NUMBER | 5,2 | N | Integrated GST rate percentage | Store the IGST rate applied to the premium |
| EXTE_PREM_CGST_AMT | CGST Amount | NUMBER | 10,2 | N | Central GST amount calculated on the premium | Store the CGST amount calculated on the premium |
| EXTE_PREM_SGST_AMT | SGST Amount | NUMBER | 10,2 | N | State GST amount calculated on the premium | Store the SGST amount calculated on the premium |
| EXTE_PREM_IGST_AMT | IGST Amount | NUMBER | 10,2 | N | Integrated GST amount calculated on the premium | Store the IGST amount calculated on the premium |
| COMM_CGST_RATE | Commission CGST Rate | NUMBER | 5,2 | N | CGST rate percentage for dealer commission | Store the CGST rate applied to the dealer commission |
| COMM_SGST_RATE | Commission SGST Rate | NUMBER | 5,2 | N | SGST rate percentage for dealer commission | Store the SGST rate applied to the dealer commission |
| COMM_IGST_RATE | Commission IGST Rate | NUMBER | 5,2 | N | IGST rate percentage for dealer commission | Store the IGST rate applied to the dealer commission |
| EXTE_PREM_COMM_CGST | Commission CGST Amount | NUMBER | 10,2 | N | CGST amount calculated on the dealer commission | Store the CGST amount calculated on the dealer commission |
| EXTE_PREM_COMM_SGST | Commission SGST Amount | NUMBER | 10,2 | N | SGST amount calculated on the dealer commission | Store the SGST amount calculated on the dealer commission |
| EXTE_PREM_COMM_IGST | Commission IGST Amount | NUMBER | 10,2 | N | IGST amount calculated on the dealer commission | Store the IGST amount calculated on the dealer commission |
| EXTE_CONV_SRV_INV_NO | Conversion Invoice Number | VARCHAR2 | 20 | N | Invoice number for conversion cases (legacy field) | Capture invoice numbers for historical conversion cases |
| EXTE_FREE_FLAG | Free Flag | VARCHAR2 | 1 | N | Flag indicating if the warranty is free or paid | Identify free warranties for special cases |
| LOYL_AWARD_PTS | Loyalty Points Awarded | NUMBER | 10 | N | Loyalty points awarded for the warranty purchase | Track loyalty points earned by the customer |
| LOYL_REDEEM_PTS | Loyalty Points Redeemed | NUMBER | 10 | N | Loyalty points redeemed by the customer | Track loyalty points redeemed for the warranty purchase |
| TOT_LOYL_REDEEM_PTS | Total Redeemed Points | NUMBER | 10 | N | Total loyalty points redeemed by the customer | Track the total redeemed points for the warranty purchase |
| LOYL_REDEEM_AMT | Loyalty Redemption Amount | NUMBER | 10,2 | N | Amount redeemed through loyalty points | Track the monetary value of redeemed loyalty points |
| TOT_LOYL_REDEEM_AMT | Total Redemption Amount | NUMBER | 10,2 | N | Total amount redeemed through loyalty points | Track the total monetary value of redeemed loyalty points |
| TOT_LOYL_AWARD_PTS | Total Awarded Points | NUMBER | 10 | N | Total loyalty points awarded for the warranty purchase | Track the total loyalty points earned by the customer |
| EXTE_CANCEL_FLAG | Cancellation Flag | VARCHAR2 | 1 | N | Flag indicating if the warranty is cancelled | Identify cancelled warranty policies |
| EXTE_CONTRACT_MILEAGE | Contract Mileage | NUMBER | 8 | Y | Vehicle mileage at the time of warranty purchase | Capture the vehicle's mileage for warranty coverage |
| OEM_VIN_NUMBER | OEM VIN Number | VARCHAR2 | 20 | N | Original Equipment Manufacturer (OEM) VIN number | Store the OEM-provided VIN for the vehicle |
| EXTE_PAY_MODE | Payment Mode | VARCHAR2 | 1 | Y | Code representing the payment mode (cash, cheque, etc.) | Identify the payment mode used for the warranty purchase |

[Continue documenting other tables...]

---

# 7. Data Model

![Data Model Diagram](data_model.png)

The Extended Warranty Sales System data model consists of the following primary tables and relationships:

MWAR_EXTE (Extended Warranty Master):
- Stores the details of extended warranty policies issued
- Primary key: EXTE_POLICY_NO
- Foreign keys: EXTE_VIN_NO (GM_VIN), EXTE_CUST_CD (GM_CIN)

VT_ADDON (Add-on Packages):
- Stores the details of add-on packages (like CCP) purchased with the warranty
- Primary key: ADDON_NUM
- Foreign key: EWAR_NO (MWAR_EXTE)

GM_VIN (Vehicle Identification):
- Stores vehicle identification details, including VIN and chassis/engine numbers
- Primary key: VIN

SH_INVOICE (Sales Invoices):
- Stores sales invoice details, including vehicle information and dealer details
- Used to retrieve vehicle details during warranty creation

AM_DEALER_LOC (Dealer Locations):
- Stores information about dealer locations, including dealer name and address
- Used to retrieve dealer details during warranty creation

AM_LIST (Master Lists):
- Stores various master data lists, such as warranty types, GST rates, and configuration parameters
- Used for populating dropdowns and fetching master data

GM_CIN (Customer Information):
- Stores customer information, including name, address, and GST number
- Used to retrieve and validate customer details during warranty creation

GD_LOYALTY_ENROL (Loyalty Enrollment):
- Stores customer loyalty program enrollment details
- Used for loyalty point redemption and integration

The data model also includes several other tables for storing related information, such as vehicle models, variants, states, cities, and more.

---

# 8. Non-Functional Requirements

## 8.1 Performance Requirements
- Transaction Processing Time: < 3 seconds for warranty creation and premium calculation
- System Uptime: 99.9% availability
- Concurrent User Capacity: Support up to 500 concurrent users without performance degradation
- Data Processing Throughput: Handle 10,000 warranty transactions per day
- Error Rate: < 1% transaction failure rate

## 8.2 Security Requirements
- Authentication: Role-based authentication with unique user credentials
- Authorization: Granular access control based on user roles (dealer, service advisor, etc.)
- Data Encryption: Encrypt sensitive data (customer PII, payment details) at rest and in transit
- Audit Trail: Maintain audit logs for critical operations (warranty creation, cancellation, payment processing)

## 8.3 Compliance Requirements
- Regulatory Compliance: Adhere to GST regulations and e-invoicing requirements
- Industry Standards: Comply with relevant industry standards for warranty management and automotive services
- Data Privacy: Implement measures to protect customer personal information (PII) as per data privacy laws

## 8.4 Usability Requirements
- User Interface: Intuitive and user-friendly interface with consistent design patterns
- Accessibility: Support accessibility features for users with disabilities (e.g., screen readers, high contrast mode)
- User Experience: Provide a seamless and efficient workflow for warranty creation and management

## 8.5 Scalability Requirements
- Concurrent User Support: Ability to scale to handle up to 1,000 concurrent users during peak periods
- Data Volume Handling: Accommodate growth in warranty data and support archiving of historical records
- System Growth: Ability to add new features, integrations, and functionality without major architectural changes

---

# 9. Key Pain Points

## 9.1 Functional Pain Points
- Manual Data Entry: Extensive manual data entry for vehicle and customer details, leading to potential errors and inefficiencies.
- Lack of Integration: Limited integration with external systems (OEM, CRM, payment gateways), resulting in data silos and redundant processes.
- Inflexible Workflows: Rigid workflows that may not accommodate varying business requirements or exceptional cases.

## 9.2 Technical Pain Points
- Monolithic Architecture: The current Oracle Forms application is a monolithic system, making it challenging to scale, maintain, and integrate with modern technologies.
- Legacy Technology Stack: Reliance on aging technologies (Oracle Forms, legacy databases) that may become unsupported or lack skilled resources.
- Performance Bottlenecks: Potential performance issues due to the limitations of the legacy technology stack, impacting user experience and scalability.

## 9.3 User Experience Pain Points
- Complex User Interface: The current user interface may be outdated, cluttered, and difficult to navigate, leading to a suboptimal user experience.
- Limited Accessibility: Lack of accessibility features for users with disabilities, potentially excluding a segment of the user base.
- Reporting Limitations: Inflexible reporting capabilities, making it challenging to gain insights and make data-driven decisions.

## 9.4 Integration Pain Points
- Disparate Data Sources: Data scattered across multiple systems (OEM, CRM, loyalty, finance), hindering a unified view and efficient data management.
- Point-to-Point Integrations: Reliance on point-to-point integrations, which can be brittle, difficult to maintain, and may not scale well.
- Lack of Real-Time Synchronization: Delays in data synchronization between systems, leading to potential data inconsistencies and outdated information.

---

# 10. Assumptions, Missing Information & Additional Requirements

## 10.1 Assumptions Made
1. Warranty Validation Sequence: Assumed that warranty validation (vehicle eligibility, mileage checks) occurs before payment processing and policy issuance.
2. Customer Data Validation: Assumed that customer data (name, address, GST number) is validated against the GM_CIN table before creating a new warranty policy.
3. User Roles and Permissions: Assumed that dealers have create/update rights for warranty policies, while service advisors have read-only access.
4. Loyalty System Integration: Assumed real-time integration with the loyalty management system for point redemption and balance updates.
5. GST Rate Configuration: Assumed that GST rates (CGST, SGST, IGST) are configurable in the VM_EW_PARAM table based on warranty type and state.
6. OTP Verification Mandatory: Assumed that OTP verification is mandatory for all transactions involving loyalty point redemption.
7. Role-Based Access Control: Assumed that role-based access control (RBAC) is implemented to restrict access to sensitive data and functionality.
8. Premium Calculation Performance: Assumed that premium calculation should complete within 3 seconds to meet performance expectations.
9. Document Upload Limits: Assumed a maximum file size limit of 5 MB for document uploads (e.g., invoices, registration certificates).
10. Warranty Cancellation Process: Assumed that warranty cancellations follow a specific approval workflow and may involve refund calculations.
11. Payment Gateway Integration: Assumed integration with third-party payment gateways for processing credit card and online payments.
12. Data Retention Policy: Assumed a data retention policy is in place for archiving or purging historical warranty records after a certain period.
13. Audit Logging Requirements: Assumed that audit logs are maintained for critical operations, such as warranty creation, cancellation, and payment processing.
14. Disaster Recovery Plan: Assumed the existence of a disaster recovery plan with defined Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO).
15. Concurrent User Session Management: Assumed a mechanism for managing concurrent user sessions and preventing conflicts or data inconsistencies.

## 10.2 Missing Information - Questions for Client

Business Process Questions:
1. What is the approval workflow for high-value warranties above a certain threshold (e.g., premium amount, vehicle value)?
2. How are warranty cancellations and refunds processed? Is there a specific approval process or workflow?
3. What is the escalation process for payment failures (e.g., declined credit cards, bounced cheques)?
4. Are there different workflows or special considerations for VIP or corporate customers?
5. How are disputes or customer complaints related to warranties handled? Is there a dedicated dispute resolution process?
6. Are there any specific reporting requirements or key performance indicators (KPIs) that need to be tracked for warranty sales?
7. How are warranty renewals handled? Is there a process for proactively identifying expiring warranties and offering renewal options?

Data & Integration Questions:
1. How is customer data synchronized between the Extended Warranty Sales System and the Customer Relationship Management (CRM) system?
2. What is the frequency and mechanism for synchronizing loyalty points and customer balances with the loyalty management system?
3. How are duplicate VIN entries prevented across different dealers or locations?
4. What is the data retention policy for warranty records? How long should historical data be kept, and what is the archiving or purging process?
5. How is vehicle master data (models, variants, specifications) updated and synchronized with the Original Equipment Manufacturer (OEM) systems?
6. Are there any specific data validation rules or business rules that need to be enforced during data integration with external systems?
7. What are the security and compliance requirements for handling and transmitting sensitive data (e.g., customer PII, payment details) during integrations?

Technical Questions:
1. What are the exact performance Service Level Agreements (SLAs) or targets for each operation (warranty creation, premium calculation, document upload, etc.)?
2. What is the disaster recovery plan for the Extended Warranty Sales System, and what are the defined Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO)?
3. How are concurrent user sessions managed, and what mechanisms are in place to prevent conflicts or data inconsistencies?
4. What is the maximum file size allowed for document uploads (e.g., invoices, registration certificates)? Are there any file type restrictions?
5. What are the specific security requirements for handling and storing Personally Identifiable Information (PII) data, such as customer names, addresses, and contact details?
6. Are there any specific requirements or constraints related to the technology stack or programming languages to be used in the modernized solution?
7. What are the expected growth projections for warranty sales volume, and how should the system be designed to accommodate future scalability needs?

## 10.3 Additional Documents Required
- [x] Complete database schema with ER diagrams and relationships
- [x] User manual or training documentation
- [ ] Integration specifications for connected systems (APIs, web services)
- [x] Business process flow diagrams (current state)
- [ ] Sample data, test cases, and test scenarios
- [ ] Security and access control matrix with role definitions
- [ ] Performance benchmarks and SLAs from current system
- [ ] Error handling and exception scenarios documentation
- [ ] Reporting requirements, templates, and samples
- [ ] Audit trail and logging requirements specification

## 10.4 Additional Codebase Information Required
- [x] Related PL/SQL packages and procedures (database-side code)
- [x] Database triggers and stored procedures with business logic
- [ ] Related Oracle Forms (if part of larger system or module)
- [ ] Reports (Oracle Reports, Crystal Reports, OBIEE, etc.)
- [ ] Batch jobs, scheduled processes, and cron jobs
- [ ] API integrations, web services, and SOAP/REST endpoints
- [ ] Configuration files, parameter files, and environment settings
- [ ] Custom libraries, reusable components, and shared modules
- [ ] Data migration scripts and ETL processes
- [ ] Test scripts, test data, and automated test cases

## 10.5 Gaps Identified in Current Analysis

Incomplete Workflows:
- [Warranty Renewal Process] - [Steps after customer agreement for renewal are missing] - [Required to understand the complete renewal workflow]
- [Warranty Cancellation Process] - [Approval steps and refund calculation logic are unclear] - [Needed for accurate implementation of cancellation functionality]

Unclear Business Rules:
- [Free Extended Warranty Eligibility] - [Criteria for determining free warranty eligibility are ambiguous] - [May lead to incorrect implementation or inconsistent behavior]
- [Dealer Commission Calculation] - [Specific rules for calculating dealer commissions based on warranty type or vehicle details are unclear] - [Accurate commission calculation is crucial for revenue sharing]

Missing Validations:
- [Payment Validation] - [Validation for payment amount matching the calculated premium is missing] - [Necessary to ensure correct payment is received]
- [Document Type Validation] - [Validation for specific document types (e.g., invoice, registration certificate) is not implemented] - [Required to ensure all necessary documents are uploaded]

Undocumented Features:
- [Loyalty Point Expiration] - [Trigger code in the form] - [Functionality for handling expired loyalty points is not documented]
- [Warranty Renewal Discount] - [Procedure: PKG_EXTE_WAR.CALC_RENEWAL_DISCOUNT] - [Renewal discount calculation logic is not documented]

Integration Gaps:
- [Payment Gateway Integration] - [Specific payment gateway APIs and integration details are unclear] - [Required for accurate implementation of payment processing]
- [Loyalty System Integration] - [Data mapping and synchronization mechanisms with the loyalty system are not well-defined] - [Needed for seamless integration and data consistency]

Data Model Gaps:
- [Warranty Claim Table] - [No table for storing warranty claim details] - [Needed for tracking warranty claims and service history]
- [Dealer Commission Table] - [No separate table for dealer commissions] - [May be required for commission calculation and reporting purposes]

---

# 11. Success Metrics

## 11.1 Key Performance Indicators (KPIs)
Define measurable success criteria for the modernized application:

### Operational Efficiency Metrics
- Transaction Processing Time: [Target: < 3 seconds per transaction]
- System Uptime: [Target: 99.9% availability]
- Concurrent User Capacity: [Target: 1,000 users without performance degradation]
- Data Processing Throughput: [Target: 15,000 records per day]
- Error Rate: [Target: < 0.5% transaction failure rate]

### Business Value Metrics
- User Adoption Rate: [Target: 90% of users actively using the system within 6 months]
- Process Completion Rate: [Target: 98% of workflows completed successfully]
- Cost Reduction: [Target: 20% reduction in operational costs]
- Revenue Impact: [Target: $5 million increase in extended warranty revenue]
- Customer Satisfaction: [Target: 95% satisfaction score or NPS]

### Quality Metrics
- Data Accuracy: [Target: 99.9% data accuracy rate]
- Defect Density: [Target: < 5 defects per 1,000 lines of code]
- Test Coverage: [Target: 90% code coverage]
- Compliance Rate: [Target: 100% compliance with regulatory requirements]

### User Experience Metrics
- Page Load Time: [Target: < 2 seconds]
- User Task Completion Time: [Target: 30% reduction from current system]
- Training Time: [Target: < 8 hours to proficiency]
- User Error Rate: [Target: < 2% user-induced errors]

## 11.2 Success Criteria
Define what constitutes successful modernization:

### Functional Success Criteria
- All business processes from legacy system are replicated or improved
- All data validations and business rules are correctly implemented
- All integrations with external systems are functional
- All reports and outputs match or exceed legacy system capabilities
- User acceptance testing passes with 95% success rate

### Technical Success Criteria
- System meets all non-functional requirements (performance, security, scalability)
- Code quality meets organizational standards (code reviews, static analysis)
- System passes all security audits and penetration tests
- Disaster recovery and business continuity plans are tested and validated
- Documentation is complete and approved

### Business Success Criteria
- Project delivered within budget (±10%)
- Project delivered within timeline (±6 weeks)
- User adoption meets target within 6 months
- ROI achieved within 2 years
- Business stakeholder satisfaction score of 90% or higher

## 11.3 Measurement Plan

### Baseline Metrics (Current System)
- Document current system performance metrics for comparison (transaction times, error rates, user satisfaction)
- Establish baseline for operational costs and resource utilization

### Measurement Frequency
- Real-time Metrics: System uptime, transaction processing time, error rates
- Daily Metrics: Transaction volume, user activity, system performance
- Weekly Metrics: User adoption, process completion rates, defect rates
- Monthly Metrics: Business value metrics, cost savings, ROI progress
- Quarterly Metrics: User satisfaction surveys, stakeholder reviews

### Reporting and Review
- Daily Dashboard: Real-time operational metrics for IT operations team
- Weekly Reports: Performance and quality metrics for project team
- Monthly Reports: Business value metrics for management
- Quarterly Reviews: Comprehensive success assessment with stakeholders

## 11.4 Continuous Improvement Targets

### Phase 1 (Months 1-3): Stabilization
- Achieve target system uptime and performance
- Resolve all critical and high-priority defects
- Complete user training and achieve initial adoption targets

### Phase 2 (Months 4-6): Optimization
- Improve transaction processing time by 20%
- Reduce error rates by 50%
- Achieve full user adoption targets

### Phase 3 (Months 7-12): Enhancement
- Implement user-requested enhancements
- Achieve cost reduction targets
- Demonstrate positive ROI

### Long-term (Year 2+): Innovation
- Introduce new features and capabilities
- Leverage advanced technologies (AI/ML, analytics)
- Continuous optimization based on user feedback and business needs

---

# 12. Appendix

## Appendix A: Abbreviations and Acronyms
| Acronym | Full Form | Description |
|---------|-----------|-------------|
| VIN | Vehicle Identification Number | Unique code used to identify vehicles |
| OEM | Original Equipment Manufacturer | Manufacturer of the vehicle |
| CRM | Customer Relationship Management | System for managing customer data and interactions |
| GST | Goods and Services Tax | Indirect tax levied on the supply of goods and services |
| CGST | Central Goods and Services Tax | GST levied by the central government |
| SGST | State Goods and Services Tax | GST levied by the state government |
| IGST | Integrated Goods and Services Tax | GST levied on inter-state supply of goods and services |
| PII | Personally Identifiable Information | Data that can be used to identify an individual |
| OTP | One-Time Password | Temporary password used for authentication |
| CCP | Comprehensive Care Package | Add-on package offered with extended warranties |
| SLA | Service Level Agreement | Agreement defining the level of service expected |
| RTO | Recovery Time Objective | Target time for restoring a system after a disaster |
| RPO | Recovery Point Objective | Maximum acceptable data loss in case of a disaster |
| KPI | Key Performance Indicator | Measurable value indicating performance |
| NPS | Net Promoter Score | Metric for measuring customer loyalty and satisfaction |
| ROI | Return on Investment | Measure of profitability or efficiency of an investment |
| AI/ML | Artificial Intelligence/Machine Learning | Technologies that enable systems to learn and make decisions |

## Appendix B: Document Control
- Created: [Date]
- Source: gm_ewarr_sale.fmb (Oracle Forms)
- Extraction Method: Automated parsing from binary FMB file
- Components Extracted: [X] Blocks, [Y] Items, [Z] Triggers, [N] Parameters
- Status: Draft for Review
- Next Steps: Stakeholder validation and technical review

---

---

*Auto-generated Business Requirements Document from Oracle Forms Analysis*
