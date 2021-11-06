import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticleState } from 'src/app/enums/ArticleState';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { UploadImageServiceService } from 'src/app/services/upload-image-service.service';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit {
  public Editor = ClassicEditor;

  public model = {
    editorData: '<p>Hello, world!</p>'
  };

  public title: string = '';
  public currentArticleState: ArticleState = ArticleState.Public;

  constructor(private uploadImageService: UploadImageServiceService) { }

  ngOnInit(): void {
    
  }

  public changeArticleState(): void {
    if (this.currentArticleState == ArticleState.Public) {
      this.currentArticleState = ArticleState.Anonymous;
    }
    else {
      this.currentArticleState = ArticleState.Public;
    }
  }

  public onChange({ editor }: ChangeEvent) {

  }

  public post() {
    console.log(this.model.editorData);
    console.log(this.title);
    console.log(this.currentArticleState);
  }

  public onReady(editor: any) {
    console.log(typeof (editor));
    editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
      return {
        upload: () =>
          new Promise((resolve, reject) => {
            console.log(loader);
            loader.file.then((file: any) => {
              const formData = new FormData();
              formData.append('upload', file);
              // Call API upload hình và trả vào resolve url của image
              this.uploadImageService.uploadTempImage(formData)
                .subscribe(data => {
                  resolve({
                    default: data.url
                  });
                })
            })
          }),
        abort: () => { console.log('Abort image upload.'); }
      };
    };
  }
}
