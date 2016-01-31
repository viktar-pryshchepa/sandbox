@extends('layouts.app')

@section('content')
  <div class="container">
    {!! Form::open(array('route' => 'photo.store', 'files' => true)) !!}
    @include('photo.partitials.form', ['submitButtonText' => 'Create'])
    {!! Form::close() !!}
  </div>
@endsection