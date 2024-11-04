import { ButtonComponent, ChatOptions, SmartPasteButtonComponent } from "@syncfusion/ej2-react-buttons";
import { TextBoxComponent, TextAreaComponent } from "@syncfusion/ej2-react-inputs";
import { RadioButtonComponent } from "@syncfusion/ej2-react-buttons";
import { ComboBoxComponent } from "@syncfusion/ej2-react-dropdowns";
import { getAzureChatAIRequest } from './ai-models';
import './App.css';

function SmartPaste() {

    const serverAIRequest = async (options: ChatOptions) => {
        let output: string = '';
        try {
            output = await getAzureChatAIRequest(options) as string;
        } catch (error) {
            console.error("Error:", error);
        }
        return output;
    };
    return (
        <>
            <div id="bug-form">
                <form className="form-container container bug-form-container" >
                    <div className="single-row-group">
                        <label htmlFor="bug-name" className="e-form-label">Bug Name</label>
                        <TextBoxComponent id="bug-name" placeholder="What's the bug ?" floatLabelType="Never" />
                    </div>
                    <div className="row-group">
                        <div>
                            <label htmlFor="reporter-name" className="e-form-label">Reporter</label>
                            <TextBoxComponent id="reporter-name" placeholder="Who is the reporter ?" floatLabelType="Never" />
                        </div>
                        <div>
                            <label htmlFor="submitted-date" className="e-form-label">Submitted Date</label>
                            <TextBoxComponent id="submitted-date" placeholder="When it is reported ?" floatLabelType="Never" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bug-description" className="e-form-label">Bug Description</label>
                        <TextAreaComponent id="bug-description" placeholder="Describe a little about the bug." rows={2} floatLabelType="Never" />
                    </div>
                    <div className="row-group">
                        <div >
                            <label htmlFor="reproduce-steps" className="e-form-label">Reproduce Steps</label>
                            <TextAreaComponent id="reproduce-steps" placeholder="Enter the repro steps here.." cols={30} rows={4} floatLabelType="Never" />
                        </div>
                        <div>
                            <label className="form-label">Bug Priority</label>
                            <div className="row">
                                <RadioButtonComponent id="radio1" label="Low" name="bug-priority" value="low" />
                            </div>
                            <div className="row">
                                <RadioButtonComponent id="radio2" label="Medium" name="bug-priority" value="medium" checked={true} />
                            </div>
                            <div className="row">
                                <RadioButtonComponent id="radio3" label="High" name="bug-priority" value="high" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="browser" className="form-label">Select the browser</label>
                        <ComboBoxComponent id="browser" popupHeight='230px' dataSource={['Chrome', 'Firefox', 'Safari']} placeholder='Choose the browser' />
                    </div>
                    <div className="form-footer">
                        {/* <ButtonComponent isPrimary={true} content="Submit" className="form-button" /> */}
                        <SmartPasteButtonComponent type="button" 
                            isPrimary={true}
                            content={'Smart Paste'}
                            iconCss={"e-icons e-paste"}
                            aiAssistHandler={serverAIRequest}
                             />
                    </div>
                </form>
            </div>
           
        </>
    );
}

export default SmartPaste;