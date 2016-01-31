<div class="form-group">
  {!! Form::label('title', 'Title:') !!}
  {!! Form::text('title', null, ['class' => 'form-control', 'placeholder' => 'Title...']) !!}
  @if ($errors->has('title'))
    <div class ='alert alert-danger'>
      {{ $errors->first('title') }}
    </div>
  @endif
</div>
<div class="form-group">
  {!! Form::label('image', 'Upload image:') !!}
  {!! Form::file('image') !!}
  @if ($errors->has('image'))
    <div class ='alert alert-danger'>
      {{ $errors->first('image') }}
    </div>
  @endif

</div>
{!! Form::submit($submitButtonText, ['class' => 'btn btn-primary']) !!}