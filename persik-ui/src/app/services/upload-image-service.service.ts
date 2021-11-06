import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageUpload } from '../models/uploads/ImageUpload';

@Injectable({
  providedIn: 'root'
})
export class UploadImageServiceService {

  private UPLOAD_IMAGE_API_URL: string = 'http://localhost:8080/upload/image';
  constructor(private httpClient: HttpClient) { }

  public uploadTempImage(formData: FormData): Observable<ImageUpload> {
    return this.httpClient.post<ImageUpload>(this.UPLOAD_IMAGE_API_URL, formData);
  }
}
