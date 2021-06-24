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
            <div class="col-lg-6 m-auto">
                <div class="card">
                    <div class="card-body">
                        <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">General</h5>

                        <div class="mb-3">
                            <label for="product-name" class="form-label">Course Name <span class="text-danger">*</span></label>
                            <input type="text" id="product-name" class="form-control" placeholder="e.g : Web Development"/>
                        </div>

                        <div class="mb-3">
                            <label for="product-description" class="form-label">Course Description <span class="text-danger">*</span></label>
                            {/* <div id="snow-editor" style="height: 150px;"></div>  */}
                            <div ref={quillRef} style={{  height: 100 }}/>
                            
                        </div>

                        <div class="mb-3">
                            <label for="product-category" class="form-label">Categories <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" placeholder="Enter categories"/>
                        </div>

                        <div class="mb-3">
                            <label for="product-price">Price <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" placeholder="Enter amount"/>
                        </div>

                        <div class="card">
                    <div class="card-body">
                        <h5 class="text-uppercase mt-0 mb-3 bg-light p-2">Course Images</h5>

                        <div {...getRootProps({style})}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </div>
                </div> 
                    
                    </div>
                </div> 
                <div class="row">
                    <div class="col-12">
                        <div className=" mb-3">
                            <button type="button" class="btn w-sm btn-light waves-effect">Cancel</button>
                            <button type="button" class="btn w-sm btn-success waves-effect waves-light ml-3">Save</button>
                        </div>
                    </div> 
                </div>
            </div> 
        </div>
    
    )
}

export default CreateCourses
