import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import '../../mock-data/post.data';

import { Post } from '../post/post-model/post.model';
import { PostData } from '../post/post-model/post-data.model';

@Injectable()
export class HomeService {

    constructor() { }

}
