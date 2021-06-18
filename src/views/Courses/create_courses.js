import React, {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';


const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const activeStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };

const CreateCourses = () => {
    // 
    const { quill, quillRef } = useQuill();
    

    React.useEffect(() => {
        if (quill) {
        quill.on('text-change', () => {
            console.log('Text change!');
        });
        }
    }, [quill]);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({accept: 'image/*'});
    
    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);
    
    return (
        

        <div class="row">
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">General</h5>

                        <div class="mb-3">
                            <label for="product-name" class="form-label">Course Name <span class="text-danger">*</span></label>
                            <input type="text" id="product-name" class="form-control" placeholder="e.g : Apple iMac"/>
                        </div>

                        <div class="mb-3">
                            <label for="product-reference" class="form-label">Reference <span class="text-danger">*</span></label>
                            <input type="text" id="product-reference" class="form-control" placeholder="e.g : Apple iMac"/>
                        </div>

                        <div class="mb-3">
                            <label for="product-description" class="form-label">Course Description <span class="text-danger">*</span></label>
                            {/* <div id="snow-editor" style="height: 150px;"></div>  */}
                            <div ref={quillRef} style={{  height: 100 }}/>
                            
                        </div>

                        <div class="mb-3">
                            <label for="product-summary" class="form-label">Course Summary</label>
                            <textarea class="form-control" id="product-summary" rows="3" placeholder="Please enter summary"></textarea>
                        </div>

                        <div class="mb-3">
                            <label for="product-category" class="form-label">Categories <span class="text-danger">*</span></label>
                            <select class="form-control select2" id="product-category">
                                <option>Select</option>
                                <optgroup label="Shopping">
                                    <option value="SH1">Shopping 1</option>
                                    <option value="SH2">Shopping 2</option>
                                    <option value="SH3">Shopping 3</option>
                                    <option value="SH4">Shopping 4</option>
                                </optgroup>
                                <optgroup label="CRM">
                                    <option value="CRM1">Crm 1</option>
                                    <option value="CRM2">Crm 2</option>
                                    <option value="CRM3">Crm 3</option>
                                    <option value="CRM4">Crm 4</option>
                                </optgroup>
                                <optgroup label="eCommerce">
                                    <option value="E1">eCommerce 1</option>
                                    <option value="E2">eCommerce 2</option>
                                    <option value="E3">eCommerce 3</option>
                                    <option value="E4">eCommerce 4</option>
                                </optgroup>

                            </select>
                        </div>

                        <div class="mb-3">
                            <label for="product-price">Price <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="product-price" placeholder="Enter amount"/>
                        </div>

                        <div class="mb-3">
                            <label class="mb-2">Status <span class="text-danger">*</span></label>
                            <br/>
                            <div class="radio form-check-inline">
                                <input type="radio" id="inlineRadio1" value="option1" name="radioInline" checked=""/>
                                <label for="inlineRadio1"> Online </label>
                            </div>
                            <div class="radio form-check-inline">
                                <input type="radio" id="inlineRadio2" value="option2" name="radioInline"/>
                                <label for="inlineRadio2"> Offline </label>
                            </div>
                            <div class="radio form-check-inline">
                                <input type="radio" id="inlineRadio3" value="option3" name="radioInline"/>
                                <label for="inlineRadio3"> Draft </label>
                            </div>
                        </div>

                        <div>
                            <label class="form-label">Comment</label>
                            <textarea class="form-control" rows="3" placeholder="Please enter comment"></textarea>
                        </div>
                    
                    
                    </div>
                </div> 
               
            </div> 
            

            <div class="col-lg-6">
                
                <div class="card">
                    <div class="card-body">
                        <h5 class="text-uppercase mt-0 mb-3 bg-light p-2">Course Images</h5>

                        <div className="container">
                            <div {...getRootProps({style})}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop some files here, or click to select files</p>
                            </div>
                        </div>
                    </div>
                </div> 
                

                <div class="card">
                    <div class="card-body">
                        <h5 class="text-uppercase mt-0 mb-3 bg-light p-2">Meta Data</h5>

                        <div class="mb-3">
                            <label for="product-meta-title" class="form-label">Meta title</label>
                            <input type="text" class="form-control" id="product-meta-title" placeholder="Enter title"/>
                        </div>

                        <div class="mb-3">
                            <label for="product-meta-keywords" class="form-label">Meta Keywords</label>
                            <input type="text" class="form-control" id="product-meta-keywords" placeholder="Enter keywords"/>
                        </div>

                        <div>
                            <label for="product-meta-description" class="form-label">Meta Description </label>
                            <textarea class="form-control" rows="5" id="product-meta-description" placeholder="Please enter description"></textarea>
                        </div>
                    </div>
                </div> 
               
            </div> 
            
            <div class="row">
                <div class="col-12">
                    <div className=" mb-3">
                        <button type="button" class="btn w-sm btn-light waves-effect">Cancel</button>
                        <button type="button" class="btn w-sm btn-success waves-effect waves-light">Save</button>
                        <button type="button" class="btn w-sm btn-danger waves-effect waves-light">Delete</button>
                    </div>
                </div> 
            </div>
        </div>
    
    )
}

export default CreateCourses
